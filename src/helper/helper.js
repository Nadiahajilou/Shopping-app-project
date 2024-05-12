const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};
// // text.split(" "): Ba estefade az split(" "), reshte text bar asase fasele (Space) be array-i az kalimate taqsim mishavad.

// slice(0, 3): Ba estefade az slice(0, 3), yek zirarraye az array-e kalimate be dast miayad. In zirarraye shamel enhas-e ba indeks 0 ta 2 (shamel indeks 0 va 1 va 2, ama gheyrshamel indeks 3) mishavad.

// Be tore khalasi, in kod matn ra be kalimate taqsim mikonad va sepas az in kalimat-ha, seh kalame avval ra be `subarray` entekhab mikhanad.
const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filtered = products.filter((p) => p.category === category);
  return filtered;
};

const createQueryObject = (currentQuery, newquerry) => {
  //const { category , ...rest}= currentQuery;Here, the ES6 object destructuring syntax is used.
  // This allows you to remove specific properties from an object and store the remaining properties in another variable.
  //Here, category is one of the properties of currentQuery that is being removed, and the rest of the properties are stored in rest.return rest;After removing the category property from currentQuery,
  //the variable rest contains all the properties of currentQuery except for the category property. Finally, rest is

  //In az vijege takhsiseye vijegehaye ES6 estefade mishavad. in no'ee az takhsis be shoma ejaze midahad ke vijege haye khasi ra az yek she'e hazf konid va baqiye vijegehara dar yek moteghare digar negah darid.
  // dar inja "category" yeki az vijegehaye "currentQuery" ast ke az an hazf mishavad va baqiye vijegehaha dar "rest" gharar migirand.return rest;Pas az hazfe vijege "category" az "currentQuery",
  // moteghare "rest" havaye tamame vijegehaye "currentQuery" ast jazbe vijege "category". Dar nahayat, moteghare "rest" ke haviye in etelaeat ast, be`ejazeye moghadamat farayande in tabe estefade mishavad.
  //Bena'barin, dar kol, in tabe vaghti ke "newQuery.category" barabar ba "all" ast, tamame etelaeat "currentQuery" ra ba hazfe vijege "category" bar migardanad.

  if (newquerry.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newquerry.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  //Dar in khatte kod, `...currentQuery` tamame khosoosiyat haye shee currentQuery ra be shee jadidi ezafeh mikonad va `...newQuery` ham tamame khosoosiyat haye shee newQuery ra be shee jadidi ezafeh mikonad. Banabarin,
  // shee jadid havaye tamame khosoosiyat haye har doo shee mishavad.
  return { ...currentQuery, ...newquerry };
};

const getInitailQuery = (searchParams) => {
  //const query = {};: Aval yek shey'e khaali be name query ejaad mishavad k dr an etela'at jostojoo gharar khahad gereft.

  //const category = searchParams.get("category");: In khatte kod meghdaar paarametr category raa az URLSearchParams ba estefade az metd get estakhraj mikonad va dar moteghaayer category gharar midahad.

  //const search = searchParams.get("search");: Behemintar, meghdaar paarametr search raa niz az URLSearchParams ba estefade az metd get estakhraj mikonad va dar moteghaayer search gharar midahad.

  //if (category) query.category = category: agar meghdaar category mojood bashad (yani meghdaar gheir az null va ya undefined bashad), an ra be shey'e query ezaafah mikonad ba makhfaze category.

  //if (search) query.search = search: hameen kar ra baraaye meghdaar search anjam midahad va agar meghdaar mojood bashad, an ra be shey'e query ezaafah mikonad ba makhfaze search.

  //dar nihayat, shey'e query k hameen etela'at jostojoo ra darad, ba estefade az return bar migardanad.
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

//sumprice , sumquantity baraye majmoe item haye entekhab shude va majmoe gheymat anha

const sumPrice = (products) => {
  const totalPrice = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return totalPrice;
};
const sumQuantity = (products) => {
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export {
  productQuantity,
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitailQuery,
  sumPrice,
  sumQuantity,
};
