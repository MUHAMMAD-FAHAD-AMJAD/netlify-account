// =================================================================================
// THIS IS YOUR MASTER PRODUCT LIST
// =================================================================================
// This is the ONLY file you need to edit to add, remove, or change your products.
// After you edit this file, run the following command in your terminal
// to update your live database:
//
// npm run seed --prefix server
//
// =================================================================================

const mockProducts = [
  {
    "id": "prod_111",
    "name": "HECTOR 10%WDG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/520342368Hectorsachy.jpeg"
    ],
    "rating": 4.5,
    "reviews": 15,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Lambda Cyhalothrin 100gm/kg (10.00% w/w). Packing - 80GM , 240GM"
  },
  {
    "id": "prod_69",
    "name": "CEEDO 20%SC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/963441673Ceedo.png"
    ],
    "rating": 4.6,
    "reviews": 22,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "It is a latest and unique insecticide chemistry which is from group neonictinoid. It has a contact,.... Packing - 150ML"
  },
  {
    "id": "prod_128",
    "name": "TRIDEMEFONE 25%WP",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1340720766Triademafone.jpeg"
    ],
    "rating": 4.7,
    "reviews": 18,
    "isSoldOut": false,
    "imageHint": "fungicide bag",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "Triadimefon 250g/kg (25%Wp). Packing - 100GM"
  },
  {
    "id": "prod_54",
    "name": "PURE HUMUS 10%",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/10568pure-humus-soil-conditioner.png"
    ],
    "rating": 4.8,
    "reviews": 35,
    "isSoldOut": false,
    "imageHint": "nutrient container",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "PURE HUMUS Soil Conditioner This a soil conditioner which increases production up to 10%. It.... Packing - 4Ltr , 8Ltr , 20Ltr , 30Ltr"
  },
  {
    "id": "prod_123",
    "name": "ORCUS 75%WDG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/99258872Orcus.jpeg"
    ],
    "rating": 4.4,
    "reviews": 12,
    "isSoldOut": false,
    "imageHint": "weedicide container",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Halosulfuron Methyl 75% w/w. Packing - 20GM"
  },
  {
    "id": "prod_88",
    "name": "RACER 360EC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1763852958Delamethrin+Triazophos_product.jpeg"
    ],
    "rating": 4.5,
    "reviews": 28,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Delamethrin+Triazophos 360EC. Packing - 200GM"
  },
  {
    "id": "prod_16",
    "name": "LAMBDA CYHALOTHRIN 2.5%EC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/18250lambda-cyhalothring-2.5-ec.jpeg"
    ],
    "rating": 4.7,
    "reviews": 40,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "LAMBDA Cyhalothrin 2.5%EC Lambda is a pesticide belongs to advance research of Parathroid group.... Packing - 250ML , 500ML , 1000ML"
  },
  {
    "id": "prod_122",
    "name": "MISSION POSSIBLE 50%WP",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/781639325MissionPossible.jpeg"
    ],
    "rating": 4.6,
    "reviews": 19,
    "isSoldOut": false,
    "imageHint": "weedicide container",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Mesotrione: 100 g/Kg (10% w/w), Atrazine: 400 g/Kg (40% w/w). Packing - 400GM , 1KG"
  },
  {
    "id": "prod_49",
    "name": "SINGLE 80% WG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/28409sulphur-80-wg.png"
    ],
    "rating": 4.8,
    "reviews": 33,
    "isSoldOut": false,
    "imageHint": "fungicide bag",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "SINGLE is broad range fungicide whose ingredient is Sulphur which is made by specific procedure. It.... Packing - 1KG"
  },
  {
    "id": "prod_115",
    "name": "SUDAO 11.6%SC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1547377629Sudao100ml.png"
    ],
    "rating": 4.5,
    "reviews": 14,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Emamectin Benzoate 25 gm/ltr.(2.45% w/w) + Chlorantraniliprole 90 gm/ltr. (8.50% w/w). Packing - 100ML"
  },
  {
    "id": "prod_103",
    "name": "ACEPHATE 75% SP",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/232997538Acephate.jpg"
    ],
    "rating": 4.6,
    "reviews": 25,
    "isSoldOut": false,
    "imageHint": "insecticide powder",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Acephate 750 gm/kg (75% w/w). Packing - 250GM"
  },
  {
    "id": "prod_132",
    "name": "TRAINER",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1817541670Trainer-new.jpg"
    ],
    "rating": 4.9,
    "reviews": 50,
    "isSoldOut": false,
    "imageHint": "nutrient bottle",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "Complex /Blend of Amino Acid and Plant Growth Regulator. Packing - 400ML , 800ML"
  },
  {
    "id": "prod_17",
    "name": "LUFENURON 5%EC",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/5819LUFENURON-5-EC-683x1024.png"
    ],
    "rating": 4.5,
    "reviews": 21,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Lufenuron eliminates bollworm by influencing their growth. Lefeunuron is a growth inhibitor.... Packing - 400ML , 1000ML"
  },
  {
    "id": "prod_76",
    "name": "LIGHT 25%WDG",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/618054907Light.jpeg"
    ],
    "rating": 4.7,
    "reviews": 30,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Exact and long-time control against sucking pests. Gives the excellent crop stand by making it pest.... Packing - 48GM"
  },
  {
    "id": "prod_127",
    "name": "PIVOT 18.7%WG",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/14793143Pivot.jpeg"
    ],
    "rating": 4.6,
    "reviews": 16,
    "isSoldOut": false,
    "imageHint": "fungicide box",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "Pyraclostrobin 67g/Kg (6.7% w/w) + Dimethomorph 120 g/kg (12% w/w). Packing - 200GM"
  },
  {
    "id": "prod_106",
    "name": "CHLORFENAPYR 360SC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1135537743Chlorfenapyre.jpeg"
    ],
    "rating": 4.5,
    "reviews": 23,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Chlorfenapyr 360 G/L (31.0% w/w). Packing - 200ML"
  },
  {
    "id": "prod_14",
    "name": "IMIDACLOPRID 25%WP",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/31561imidacloprid-70-ws.jpeg"
    ],
    "rating": 4.4,
    "reviews": 29,
    "isSoldOut": false,
    "imageHint": "insecticide powder",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "N/A. Packing - 100GM"
  },
  {
    "id": "prod_119",
    "name": "BURJ 75%WG",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1384177484Burj.jpeg"
    ],
    "rating": 4.6,
    "reviews": 11,
    "isSoldOut": false,
    "imageHint": "weedicide box",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Sulfosufuron 75% w/w. Packing - 13.5GM"
  },
  {
    "id": "prod_133",
    "name": "CARTAP 4%G",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/902813422Cartapppp.png"
    ],
    "rating": 4.7,
    "reviews": 38,
    "isSoldOut": false,
    "imageHint": "granules bag",
    "category": "Granules",
    "subcategory": "granules",
    "tags": [
      "granules"
    ],
    "description": "Cartap Hydrochloride 40 g/kg (4% w/w). Packing - 9KG"
  },
  {
    "id": "prod_94",
    "name": "SEED CARE 300FS",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1286045188Seed_Care_product.png"
    ],
    "rating": 4.8,
    "reviews": 45,
    "isSoldOut": false,
    "imageHint": "seed treatment bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Seed Care 300FS. Packing - 50ML , 100ML"
  },
  {
    "id": "prod_135",
    "name": "CORNER 27%Zinc",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1371848144Corner3.jpg"
    ],
    "rating": 4.9,
    "reviews": 60,
    "isSoldOut": false,
    "imageHint": "fertilizer bag",
    "category": "Fertilizers",
    "subcategory": "fertilizers",
    "tags": [
      "fertilizers"
    ],
    "description": "Zinc...............(270g/kg) 27% w/w. Packing - 9KG"
  },
  {
    "id": "prod_80",
    "name": "SHORT 13%OD",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1679911833Short.png"
    ],
    "rating": 4.5,
    "reviews": 17,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Very effective mixture weedicide against grass like weeds in wheat even in very low temperature...... Packing - 300ML"
  },
  {
    "id": "prod_31",
    "name": "MISSION EXTRA 55%SC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/8755mission-extra-55-sc.jpeg"
    ],
    "rating": 4.6,
    "reviews": 24,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Mission Extra is a wide range selective weedicide which eradicates Grassy, Broadleaf and Sedges in.... Packing - 500ML , 1000ML"
  },
  {
    "id": "prod_116",
    "name": "VALOR 12%SC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1697495855valor.jpeg"
    ],
    "rating": 4.7,
    "reviews": 13,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Abamectin 20 G/L (1.80 % w/w) + Thiamethoxam 100 G/L (9% w/w). Packing - 400ML"
  },
  {
    "id": "prod_2",
    "name": "ACETAMEPRID 20%SP",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/6380acetamiprid-20-sp.jpg"
    ],
    "rating": 4.5,
    "reviews": 31,
    "isSoldOut": false,
    "imageHint": "insecticide powder",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "ACETAMIPRID 20%SP Acetamiprid is a new selective discovery according to advance demands for control.... Packing - 250GM"
  },
  {
    "id": "prod_113",
    "name": "KING POCKER 25%EW",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/115527771King_Pocker-bg.png"
    ],
    "rating": 4.8,
    "reviews": 20,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Carbosulfan (230 G/L) 20% w/w Emamectin Benzoate (20 G/L) 1.74% w/w. Packing - 200ML"
  },
  {
    "id": "prod_129",
    "name": "TRIP 250SC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1987333082Trip-bg.png"
    ],
    "rating": 4.6,
    "reviews": 10,
    "isSoldOut": false,
    "imageHint": "fungicide bottle",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "Iprodione 20% w/v (18.5% w/w) + Tebuconazole 5% w/v (4.6% w/w). Packing - 125ML"
  },
  {
    "id": "prod_79",
    "name": "SHIDING 21%EC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/560759570Shiding.jpeg"
    ],
    "rating": 4.6,
    "reviews": 26,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Shiding is the best mixture insecticide having a combination of two different grouped insecticide...... Packing - 250ML , 800ML"
  },
  {
    "id": "prod_104",
    "name": "LEERA 80%WG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2014729525Leera.png"
    ],
    "rating": 4.7,
    "reviews": 17,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Leera is the best insecticide against sucking pest and mites as well. It has contact and stomach.... Packing - 150GM"
  },
  {
    "id": "prod_37",
    "name": "PARAZONE 20%SL",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/4463paraquat-20-sl.jpeg"
    ],
    "rating": 4.5,
    "reviews": 29,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "PARAZONE 20%SL Very effective non-selective PARAZONE has ability to eliminate all grass like and.... Packing - 1000ML"
  },
  {
    "id": "prod_30",
    "name": "KICK 48%SC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/30114kick-48-sc.png"
    ],
    "rating": 4.6,
    "reviews": 21,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "KICK 48%SC Kick is a mixture of three weedicides which successively controls the broadleaf weeds.... Packing - 350ML"
  },
  {
    "id": "prod_126",
    "name": "WAKER 50%SC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1658160518Walker300ml.png"
    ],
    "rating": 4.7,
    "reviews": 18,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Fluroxypyr-Meptyl: 100 G/Ltr (8.85% w/w), Mcpa-Isooctyl: 370 g/ltr (32.74%), Bromoxynil: 50 g/ltr.... Packing - 300ML"
  },
  {
    "id": "prod_72",
    "name": "SUPER PLUS 6%WG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/132520509Super.jpg"
    ],
    "rating": 4.8,
    "reviews": 25,
    "isSoldOut": false,
    "imageHint": "weedicide box",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Super Plus is a systemic wheat weedicide which controls the all types of grass-like and broadleaf.... Packing - 110GM"
  },
  {
    "id": "prod_114",
    "name": "SOVISECT 50%SP",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1498527914Sovisect.jpeg"
    ],
    "rating": 4.9,
    "reviews": 32,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Thiocyclam Hydrogen Oxalate 50% w/w. Packing - 100GM"
  },
  {
    "id": "prod_70",
    "name": "CONDO 30%SC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/138648226Condo.png"
    ],
    "rating": 4.5,
    "reviews": 20,
    "isSoldOut": false,
    "imageHint": "fungicide bottle",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "New, latest and broad-spectrum fungicide. It protects the old foliage and the new as well due to.... Packing - 300ML"
  },
  {
    "id": "prod_33",
    "name": "METRIBUZIN 70%WP",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/19305METRIBUZIN-70WP-683x1024.jpeg"
    ],
    "rating": 4.6,
    "reviews": 28,
    "isSoldOut": false,
    "imageHint": "weedicide bag",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Metribuzin is wide range weedicide which eliminates weeds in crops of Potato and Wheat. Its.... Packing - 250GM"
  },
  {
    "id": "prod_81",
    "name": "SKATER 15%EC",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1603655310Skater.png"
    ],
    "rating": 4.7,
    "reviews": 19,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Broadspectrum post-emergence weedicide for grass-like weeds in all broadleaf crops.. Packing - 400ML"
  },
  {
    "id": "prod_105",
    "name": "BIFENTHRIN 10% EC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1412141642Bifenthrin.png"
    ],
    "rating": 4.8,
    "reviews": 35,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Bifenthrin 100 gm/Ltr. (10.6% w/w). Packing - 500ML , 1000ML"
  },
  {
    "id": "prod_84",
    "name": "MULTICLEAN 25%OD",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/459180245Multi-Clean.png"
    ],
    "rating": 4.9,
    "reviews": 41,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Multiclean is a systemic wheat weedicide which controls the all types of grass-like and broadleaf.... Packing - 350ML"
  },
  {
    "id": "prod_109",
    "name": "EMAMECTIN 1.9%EC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/757741861Emamectin.png"
    ],
    "rating": 4.5,
    "reviews": 24,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Emamectin Benzoate 19 G/L (2.04% w/w). Packing - 200ML , 400ML , 1000ML"
  },
  {
    "id": "prod_57",
    "name": "SAVER PEDAWAR 10%G",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/14279SAVER-PAIDAWAR-10DANAYDAR-768x1024.png"
    ],
    "rating": 4.6,
    "reviews": 33,
    "isSoldOut": false,
    "imageHint": "granules bag",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients",
      "granules"
    ],
    "description": "Crop Suppliment. A compound to fulfill the deficiency of Zinc and other major elements like.... Packing - 4KG"
  },
  {
    "id": "prod_67",
    "name": "SAJAJAN",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1132570839Sajjan.jpeg"
    ],
    "rating": 4.7,
    "reviews": 29,
    "isSoldOut": false,
    "imageHint": "nutrient container",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "It is the unique and latest crop nutrient therapy. It has chelated nutrients including zinc and is.... Packing - 200GM"
  },
  {
    "id": "prod_117",
    "name": "WOOLMER 3%SC",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1332648517Woolmer400ml.png"
    ],
    "rating": 4.8,
    "reviews": 22,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Emamectin Benzoate 10 gm/ltr. (0.94% w/w) + Lufenuron 20 gm/ltr. (1.88% w/w). Packing - 400ML , 1000ML"
  },
  {
    "id": "prod_118",
    "name": "ATRAZINE 38%SC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1220103988Atrazin.jpeg"
    ],
    "rating": 4.9,
    "reviews": 15,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Atrazine 380 gm/ltr  (34.3% w/w). Packing - 500ML , 1000ML"
  },
  {
    "id": "prod_131",
    "name": "SAVERON Boron 5%",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2132996493Saveron.jpg"
    ],
    "rating": 4.5,
    "reviews": 38,
    "isSoldOut": false,
    "imageHint": "nutrient bottle",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "Boron…..... 5% w/v (50 G/L). Packing - 500ML"
  },
  {
    "id": "prod_64",
    "name": "ENERGY 5%G",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/23938monomehypo-5g.png"
    ],
    "rating": 4.6,
    "reviews": 27,
    "isSoldOut": false,
    "imageHint": "granules bag",
    "category": "Granules",
    "subcategory": "granules",
    "tags": [
      "granules"
    ],
    "description": "Monomehypo is an advanced and most effective pesticide for rich production of Rice. Being systemic,.... Packing - 7KG"
  },
  {
    "id": "prod_108",
    "name": "DINO 200SG",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/197718019Dino.jpeg"
    ],
    "rating": 4.7,
    "reviews": 31,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Dinotefuran 20% w/w. Packing - 120GM"
  },
  {
    "id": "prod_60",
    "name": "KALLIUM S",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/15250kallium-s.png"
    ],
    "rating": 4.8,
    "reviews": 42,
    "isSoldOut": false,
    "imageHint": "fertilizer bag",
    "category": "Fertilizers",
    "subcategory": "fertilizers",
    "tags": [
      "fertilizers"
    ],
    "description": "Water Soluble Feritlizer. Kalluim-S is a unique fertilizer which has 50% of Potash and also.... Packing - 10KG , 25KG"
  },
  {
    "id": "prod_125",
    "name": "SPECTAR 20%EC",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1178014332Spector.jpeg"
    ],
    "rating": 4.9,
    "reviews": 19,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Metamifop 80 G/L(8% w/w) + Cyhalofop Butyl 120 G/L(12% w/w). Packing - 300ML"
  },
  {
    "id": "prod_50",
    "name": "THIOPHENATE 70% WP",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/20030THIOPHANATE-METHYL-70-683x1024.jpeg"
    ],
    "rating": 4.5,
    "reviews": 34,
    "isSoldOut": false,
    "imageHint": "fungicide bag",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "Thiophanate Methyle is a wide range Systemic fungicide. Its real active is capable of both as.... Packing - 400GM"
  },
  {
    "id": "prod_46",
    "name": "PROFILE 47%WP",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/30711PROFILE-47FUNGICIDE-683x1024.jpeg"
    ],
    "rating": 4.6,
    "reviews": 23,
    "isSoldOut": false,
    "imageHint": "fungicide bag",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "PROFILE 47%WP Profile is a combination of two elements Kasugamycin and Copper Oxychloride which is.... Packing - 200GM , 500GM"
  },
  {
    "id": "prod_26",
    "name": "BROMOXYNIL 40%EC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/31046bromoxynil-40-ec.png"
    ],
    "rating": 4.7,
    "reviews": 28,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "N/A. Packing - 400ML , 800ML"
  },
  {
    "id": "prod_110",
    "name": "FIPRONIL 5%SC",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/11693581Fipronil480ml.png"
    ],
    "rating": 4.8,
    "reviews": 36,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Fipronil 50 G/L (4.65% w/w). Packing - 480ML"
  },
  {
    "id": "prod_62",
    "name": "WINSTO 30%WDG",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/27855WNSTA-30WP-e1518088107905-731x1024.png"
    ],
    "rating": 4.9,
    "reviews": 25,
    "isSoldOut": false,
    "imageHint": "weedicide box",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Winsta eliminates pointed leaf, braoadleaf and other grass like weeds of rice crop effectively. It.... Packing - 100GM"
  },
  {
    "id": "prod_120",
    "name": "DEMO 20%WP",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1663843375Demo.png"
    ],
    "rating": 4.5,
    "reviews": 20,
    "isSoldOut": false,
    "imageHint": "weedicide box",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Metsulfuron Methyl 200 gm/Kg (20% w/w). Packing - 20GM"
  },
  {
    "id": "prod_63",
    "name": "FIPRONIL 0.4%G",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/9497fipronil-0.4-g.png"
    ],
    "rating": 4.6,
    "reviews": 30,
    "isSoldOut": false,
    "imageHint": "granules bag",
    "category": "Granules",
    "subcategory": "granules",
    "tags": [
      "granules"
    ],
    "description": "Fipronil is a systemic pesticide which kills the pests by eating and contacting. Other than rice,.... Packing - 6KG"
  },
  {
    "id": "prod_95",
    "name": "ACUBAR 30%WP",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1192552725ACUBAR-removebg-preview.jpeg"
    ],
    "rating": 4.7,
    "reviews": 26,
    "isSoldOut": false,
    "imageHint": "weedicide bag",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "ACUBAR (Bensulfuron 6.7% + Acetachlor 23.3 %) Pre Emergence weedicide for the complete control of .... Packing - 150GM"
  },
  {
    "id": "prod_53",
    "name": "JEET",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2027jeet-poassium-humate-solid.png"
    ],
    "rating": 4.8,
    "reviews": 39,
    "isSoldOut": false,
    "imageHint": "nutrient bag",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "JEET Potassium Humate Solid. Jeet is a soil conditioner. It increases production upto 10 %. Jeet is.... Packing - 8KG , 20KG"
  },
  {
    "id": "prod_15",
    "name": "IMIDACLOPRID 25%WP",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/13493imidacloprid-70-ws.jpeg"
    ],
    "rating": 4.5,
    "reviews": 27,
    "isSoldOut": false,
    "imageHint": "insecticide powder",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "IMIDACLOPRID 25%WP. Exclusive and unique seed treatment from Neonicotinoids group by use of which.... Packing - 50GM"
  },
  {
    "id": "prod_27",
    "name": "CLODINOFOP 15%WP",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/9991clodinafop-propargly-15-wp.jpeg"
    ],
    "rating": 4.7,
    "reviews": 35,
    "isSoldOut": false,
    "imageHint": "weedicide bag",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Clodinafop is for Wild Oat, Bird’s Seed Grass and other Grass like weeds which harms wheat.... Packing - 160GM"
  },
  {
    "id": "prod_90",
    "name": "KNOCK OUT 18%FS",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1412137555Knocker_Plus-product.png"
    ],
    "rating": 4.8,
    "reviews": 29,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "KNOCK OUT 18%FS. Packing - 1000ML"
  },
  {
    "id": "prod_59",
    "name": "ADVANCER",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/11549advancer.png"
    ],
    "rating": 4.9,
    "reviews": 40,
    "isSoldOut": false,
    "imageHint": "fertilizer bag",
    "category": "Fertilizers",
    "subcategory": "fertilizers",
    "tags": [
      "fertilizers"
    ],
    "description": "It contains 14% Nitrogen and 44% Phosphorous. It can be used as Nutrigation by drip. It is 100%.... Packing - 8KG"
  },
  {
    "id": "prod_134",
    "name": "MARCH 0.2%G",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/59481214March.jpeg"
    ],
    "rating": 4.6,
    "reviews": 22,
    "isSoldOut": false,
    "imageHint": "granules bag",
    "category": "Granules",
    "subcategory": "granules",
    "tags": [
      "granules"
    ],
    "description": "Chlorantraniloprole: 0.2% w/w. Packing - 8KG"
  },
  {
    "id": "prod_74",
    "name": "GOAL 36%WP",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1549943618Goal.png"
    ],
    "rating": 4.7,
    "reviews": 33,
    "isSoldOut": false,
    "imageHint": "fungicide box",
    "category": "Fungicides",
    "subcategory": "fungicides",
    "tags": [
      "fungicides"
    ],
    "description": "It is a mixture of two very strong fungicides and has both the contact and systemic way of action..... Packing - 250GM , 1KG"
  },
  {
    "id": "prod_121",
    "name": "FAST PLUS 88.8%WSG",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2030827368Fast-Plus.jpeg"
    ],
    "rating": 4.8,
    "reviews": 45,
    "isSoldOut": false,
    "imageHint": "weedicide box",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Glyphosate 888gm/kg (88.8% w/w). Packing - 50GM"
  },
  {
    "id": "prod_112",
    "name": "INSTANT SUPER 50%SG",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2066664533Instentsuper.jpeg"
    ],
    "rating": 4.9,
    "reviews": 50,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Nitenpyram 500 gm/kg (50% w/w). Packing - 50GM"
  },
  {
    "id": "prod_66",
    "name": "SNIPER",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1450393423Sniper.png"
    ],
    "rating": 4.5,
    "reviews": 18,
    "isSoldOut": false,
    "imageHint": "nutrient bag",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "Nitrogen in the Sniper increases the growth of the plants.Sniper is suitable for gardening.The.... Packing - 1KG"
  },
  {
    "id": "prod_19",
    "name": "SPEED 50%SC",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/26417speed-10-wdg.jpeg"
    ],
    "rating": 4.6,
    "reviews": 23,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Speed is an advance IGR belongs to Benzoylurea group which inhibits the Chitin building process by.... Packing - 100ML"
  },
  {
    "id": "prod_107",
    "name": "CHLORPYRIFOS 40%EC",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1362526246Chlorpyrifos.png"
    ],
    "rating": 4.7,
    "reviews": 34,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Chlorpyrifos 400 G/L (38% w/w). Packing - 1000ML"
  },
  {
    "id": "prod_13",
    "name": "IMIDACLOPRID 25%WP",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/19792imidacloprid-25-wp200.jpeg"
    ],
    "rating": 4.8,
    "reviews": 41,
    "isSoldOut": false,
    "imageHint": "insecticide powder",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Imidacloprid is very effective, systemic and long lasting pesticide from a new group.... Packing - 50GM , 100GM , 200GM"
  },
  {
    "id": "prod_98",
    "name": "OLA 50%WG",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/959965389Ola-product-pic.jpeg"
    ],
    "rating": 4.9,
    "reviews": 48,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Active: Flunicamid. Dose: 60gm/acre. Rainfast: 2 hours. Packing - 60GM"
  },
  {
    "id": "prod_55",
    "name": "RAPID ZINC 10%W/V",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/13281rapid-zinc.png"
    ],
    "rating": 4.5,
    "reviews": 19,
    "isSoldOut": false,
    "imageHint": "nutrient bottle",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "RAPID ZINC 10%w/v Crop Supplement. Packing - 3Ltr , 20Ltr , 30Ltr"
  },
  {
    "id": "prod_51",
    "name": "BENEFIT",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/5733benefit.jpeg"
    ],
    "rating": 4.6,
    "reviews": 26,
    "isSoldOut": false,
    "imageHint": "nutrient bag",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "Benefit (consists of Nitrogen, Phosphorus & Potassium) is a balanced product. Our lands lacks these.... Packing - 500GM , 1000GM"
  },
  {
    "id": "prod_93",
    "name": "PYRIPROXYFEN 10.8%EC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1882442014Pyriproxyfen_product.jpeg"
    ],
    "rating": 4.7,
    "reviews": 37,
    "isSoldOut": false,
    "imageHint": "insecticide bottle",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Pyriproxyfen 10.8% EC. Packing - 500ML"
  },
  {
    "id": "prod_28",
    "name": "FAST 480SL",
    "brand": "Bayer",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/6532fast-480-sl.png"
    ],
    "rating": 4.8,
    "reviews": 44,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "FAST 480SL Fast is a completely non-selective systemic weedicide which completely eliminates weeds.... Packing - 1000ML"
  },
  {
    "id": "prod_75",
    "name": "LEERA 80%WG",
    "brand": "FMC",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/2014729525Leera.png"
    ],
    "rating": 4.9,
    "reviews": 52,
    "isSoldOut": false,
    "imageHint": "insecticide box",
    "category": "Insecticides",
    "subcategory": "insecticides",
    "tags": [
      "insecticides"
    ],
    "description": "Leera is the best insecticide against sucking pest and mites as well. It has contact and stomach.... Packing - 150GM"
  },
  {
    "id": "prod_130",
    "name": "KALLIUM-30",
    "brand": "Saver",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/1457091551Kallium30-New.png"
    ],
    "rating": 4.5,
    "reviews": 21,
    "isSoldOut": false,
    "imageHint": "nutrient bottle",
    "category": "Micro Nutrients",
    "subcategory": "micro-nutrients",
    "tags": [
      "micro-nutrients"
    ],
    "description": "Potassium (K2O): 30% w/v = 300 G/L. Packing - 1000ML , 20Ltr"
  },
  {
    "id": "prod_124",
    "name": "RANGEELA 42%EC",
    "brand": "Kanzo AG",
    "price": 0,
    "images": [
      "https://maherzaraimarkaz.store/uploadfiles/112087747Rangeela1Ltr-Yellow.png"
    ],
    "rating": 4.6,
    "reviews": 28,
    "isSoldOut": false,
    "imageHint": "weedicide bottle",
    "category": "Weedicides",
    "subcategory": "weedicides",
    "tags": [
      "weedicides"
    ],
    "description": "Pendimethalin 170 gm/Ltr(15% w/w) + Acetochlor 250Gm/Ltr(23% w/w). Packing - 800ML"
  }
];



module.exports = { mockProducts };
