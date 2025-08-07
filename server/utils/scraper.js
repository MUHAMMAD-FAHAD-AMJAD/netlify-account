const http = require('http');
const fs = require('fs');
const path = require('path');
const parse5 = require('parse5');

const url = 'http://saverenterprises.com/products';

function findNodes(nodes, predicate) {
  let results = [];
  for (const node of nodes) {
    if (predicate(node)) {
      results.push(node);
    }
    if (node.childNodes) {
      results = results.concat(findNodes(node.childNodes, predicate));
    }
  }
  return results;
}

function getNodeText(node) {
    if (node.nodeName === '#text') {
        return node.value.trim();
    }
    if (node.childNodes) {
        return node.childNodes.map(getNodeText).join('').trim();
    }
    return '';
}

function getAttribute(node, attrName) {
    if (node.attrs) {
        const attr = node.attrs.find(a => a.name === attrName);
        return attr ? attr.value : null;
    }
    return null;
}


http.get(url, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    console.log('Successfully fetched HTML.');

    const document = parse5.parse(html);
    const productNodes = findNodes(document.childNodes, (node) =>
        node.nodeName === 'div' && getAttribute(node, 'class') === 'product2'
    );

    const products = productNodes.map(productNode => {
        const categoryNode = findNodes(productNode.childNodes, (node) =>
            node.nodeName === 'span' && getAttribute(node, 'class') === 'badge badge-success'
        )[0];

        const imageNode = findNodes(productNode.childNodes, (node) =>
            node.nodeName === 'img' && getAttribute(node, 'class') === 'img-fluid'
        )[0];

        const nameNode = findNodes(productNode.childNodes, (node) => node.nodeName === 'h5')[0];
        const descriptionNode = findNodes(productNode.childNodes, (node) => node.nodeName === 'h6')[0];

        const packingNode = findNodes(productNode.childNodes, (node) =>
            node.nodeName === 'span' && getAttribute(node, 'class') === 'regular-price'
        )[0];

        return {
            category: categoryNode ? getNodeText(categoryNode) : null,
            image: imageNode ? getAttribute(imageNode, 'src') : null,
            name: nameNode ? getNodeText(nameNode) : null,
            description: descriptionNode ? getNodeText(descriptionNode) : null,
            packing: packingNode ? getNodeText(packingNode).replace('Packing -', '').trim() : null,
        }
    });

    fs.writeFileSync(path.join(__dirname, 'scraped-products.json'), JSON.stringify(products, null, 2));
    console.log(`Successfully scraped ${products.length} products.`);
  });
}).on('error', (err) => {
  console.error('Error fetching HTML:', err);
});
