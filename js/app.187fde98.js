(function(){"use strict";var e={604:function(e,t,a){var s=a(9963),r=a(6252);const l=(0,r._)("h1",null,"Домашні завдання урок № 6.",-1),n={class:"tasks"};function i(e,t,a,s,i,o){const d=(0,r.up)("first-task"),u=(0,r.up)("second-task"),c=(0,r.up)("third-task"),p=(0,r.up)("fourth-task"),m=(0,r.up)("products-page"),h=(0,r.up)("sixth-task");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("div",n,[(0,r.Wm)(d,{class:"tasks__item"}),(0,r.Wm)(u,{class:"tasks__item"}),(0,r.Wm)(c,{class:"tasks__item"}),(0,r.Wm)(p,{class:"tasks__item"}),(0,r.Wm)(m,{class:"tasks__item"}),(0,r.Wm)(h,{class:"tasks__item"})])],64)}const o={class:"first-task"},d=(0,r._)("h2",{class:"first-task__title"},"Задача 1.",-1),u=(0,r._)("p",{class:"first-task__text"}," Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий). ",-1);function c(e,t,a,s,l,n){const i=(0,r.up)("user-age-input");return(0,r.wg)(),(0,r.iD)("div",o,[d,u,(0,r.Wm)(i,{modelValue:l.age,"onUpdate:modelValue":t[0]||(t[0]=e=>l.age=e),modelModifiers:{check:!0,setColor:!0}},null,8,["modelValue"])])}function p(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("label",null,[(0,r.Uk)(" Введіть свій вік "),(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{ref:"ageInput",key:n.updateKey,"onUpdate:modelValue":t[0]||(t[0]=e=>i.userAgeValue=e),type:"number"})),[[s.nr,i.userAgeValue]])])}var m={name:"UserAgeInput",props:{modelValue:{type:Number,default:null},modelModifiers:{type:Object,default:()=>({})}},emits:["update:userAge"],data(){return{updateKey:0}},computed:{userAgeValue:{get(){return this.modelValue},set(e){this.modelModifiers.check&&e>150&&(e=null,this.$nextTick((()=>{this.updateKey++,this.$nextTick((()=>{this.$refs.ageInput.focus()}))}))),this.modelModifiers.setColor&&this.setStatusColor(e),this.$emit("update:userAge",e)}}},methods:{setStatusColor(e){this.$refs.ageInput.style.backgroundColor=e<=10?"green":e<=21?"yellow":e<=150?"orange":"transparent"}}},h=a(3744);const f=(0,h.Z)(m,[["render",p]]);var g=f,_={name:"FirstTask",components:{UserAgeInput:g},data(){return{age:null}}};const y=(0,h.Z)(_,[["render",c]]);var k=y;const b={class:"second-task"},v=(0,r._)("h2",{class:"second-task__title"},"Задача 2.",-1),S=(0,r._)("p",{class:"second-task__text"}," Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний. ",-1);function D(e,t,a,s,l,n){const i=(0,r.up)("file-path-input");return(0,r.wg)(),(0,r.iD)("div",b,[v,S,(0,r.Wm)(i,{modelValue:l.path,"onUpdate:modelValue":t[0]||(t[0]=e=>l.path=e),modelModifiers:{lazy:!0,checkPath:!0}},null,8,["modelValue"])])}function w(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("label",null,[(0,r.Uk)(" Введіть шлях до фалу JS "),(0,r.wy)((0,r._)("input",{ref:"pathInput","onUpdate:modelValue":t[0]||(t[0]=e=>i.filePathValue=e),title:"Приклад шляху до файлу: c:/directory-name/file-name.js",type:"url",placeholder:"c:/directory/file-name.js"},null,512),[[s.nr,i.filePathValue]])])}function V(e){const t=/^(?:[\w]:|\/)(\/[a-z_\-\s0-9.]+)+\.(js)$/gi;return t.test(e)}function x(e){const t=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;return t.test(e)}var U={name:"FilePathInput",props:{modelValue:{type:String,required:!0},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue"],computed:{filePathValue:{get(){return this.modelValue},set(e){this.modelModifiers.checkPath&&(V(e)?this.$refs.pathInput.style.backgroundColor="transparent":this.$refs.pathInput.style.backgroundColor="red"),this.$emit("update:modelValue",e)}}}};const C=(0,h.Z)(U,[["render",w]]);var L=C,M={name:"SecondTask",components:{FilePathInput:L},data(){return{path:null}}};const I=(0,h.Z)(M,[["render",D]]);var P=I;const A={class:"third-task"},B=(0,r._)("h2",{class:"third-task__title"},"Задача 3.",-1),$=(0,r._)("p",{class:"third-task__text"}," Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний. ",-1);function j(e,t,a,s,l,n){const i=(0,r.up)("email-input");return(0,r.wg)(),(0,r.iD)("div",A,[B,$,(0,r.Wm)(i,{modelValue:l.email,"onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),modelModifiers:{check:!0}},null,8,["modelValue"])])}function F(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("label",null,[(0,r.Uk)(" Enter your email "),(0,r.wy)((0,r._)("input",{ref:"emailInput","onUpdate:modelValue":t[0]||(t[0]=e=>i.emailValue=e),type:"email",title:"example@inv.mn.edu",onChange:t[1]||(t[1]=(...e)=>i.addDomain&&i.addDomain(...e))},null,544),[[s.nr,i.emailValue]])])}const O="@inv.mn.edu";var z={name:"EmailInput",props:{modelValue:{type:String,required:!0},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue"],computed:{emailValue:{get(){return this.modelValue},set(e){this.modelModifiers.check&&(x(e)?this.$refs.emailInput.style.backgroundColor="transparent":this.$refs.emailInput.style.backgroundColor="red"),this.$emit("update:modelValue",e)}}},methods:{addDomain(){this.emailValue&&(this.emailValue+=O)}}};const T=(0,h.Z)(z,[["render",F]]);var N=T,R={name:"ThirdTask",components:{EmailInput:N},data(){return{email:null}}};const H=(0,h.Z)(R,[["render",j]]);var E=H;const G={class:"fourth-task"},Z=(0,r._)("h2",{class:"fourth-task__tile"},"Задача 4.",-1),W=(0,r._)("p",{class:"fourth-task__text"}," Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні відповідних модифікаторів відповідних полів input: ",-1),K=(0,r._)("ul",{class:"fourth-task__list"},[(0,r._)("li",null,"ім’я користувача - у випадку порожнього поля (червони фон)"),(0,r._)("li",null,"вік (вік менший за 18 – колір фону червоний, інакше – зелений).")],-1);function X(e,t,a,s,l,n){const i=(0,r.up)("user-info-form");return(0,r.wg)(),(0,r.iD)("div",G,[Z,W,K,(0,r.Wm)(i,{login:l.userLogin,"onUpdate:login":t[0]||(t[0]=e=>l.userLogin=e),loginModifiers:{notFilled:!0},age:l.userAge,"onUpdate:age":t[1]||(t[1]=e=>l.userAge=e),ageModifiers:{allowedAge:!0}},null,8,["login","age"])])}const Y={class:"user-info"},q={class:"user-info__login"},J={class:"user-info__age"};function Q(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r._)("div",q,[(0,r._)("label",null,[(0,r.Uk)(" Введіть логін "),(0,r.wy)((0,r._)("input",{ref:"login","onUpdate:modelValue":t[0]||(t[0]=e=>i.loginValue=e),type:"text"},null,512),[[s.nr,i.loginValue]])])]),(0,r._)("div",J,[(0,r._)("label",null,[(0,r.Uk)(" Введіть вік "),(0,r.wy)((0,r._)("input",{ref:"age","onUpdate:modelValue":t[1]||(t[1]=e=>i.ageValue=e),type:"number"},null,512),[[s.nr,i.ageValue]])])])])}var ee={name:"UserInfoForm",props:{login:{type:String,default:""},loginModifiers:{type:Object,default:()=>({})},age:{type:Number,default:null},ageModifiers:{type:Object,default:()=>({})}},emits:["update:login","update:age"],computed:{loginValue:{get(){return this.login},set(e){this.loginModifiers.notFilled&&(this.$refs.login.style.backgroundColor=e?"green":"red"),this.$emit("update:login",e)}},ageValue:{get(){return this.age},set(e){this.ageModifiers.allowedAge&&(this.$refs.age.style.backgroundColor=e<18?"red":"green"),this.$emit("update:age",e)}}},methods:{}};const te=(0,h.Z)(ee,[["render",Q],["__scopeId","data-v-298a82de"]]);var ae=te,se={name:"FourthTask",components:{UserInfoForm:ae},data(){return{userLogin:null,userAge:null}}};const re=(0,h.Z)(se,[["render",X]]);var le=re;const ne=e=>((0,r.dD)("data-v-0235d626"),e=e(),(0,r.Cn)(),e),ie={class:"fifth-task"},oe=ne((()=>(0,r._)("h2",{class:"fifth-task__title"},"Задача 5.",-1))),de=ne((()=>(0,r._)("p",{class:"fifth-task__text"}," Спробуйте відтворити фрагмент. Компонент ProductsFilters через v-model повертає 2 значення фільтра: продавець, бренд. При заданні модифікатора “check” відображати секцію зеленою рамкою, якщо фільтр з відповідної секції (продавець чи бренд) не обрано. ",-1))),ue={class:"page"},ce={class:"page__sidebar"};function pe(e,t,a,s,l,n){const i=(0,r.up)("products-filter"),o=(0,r.up)("products-list");return(0,r.wg)(),(0,r.iD)("div",ie,[oe,de,(0,r._)("div",ue,[(0,r._)("aside",ce,[(0,r.Wm)(i,{"seller-status":l.selectedSellers,"onUpdate:sellerStatus":t[0]||(t[0]=e=>l.selectedSellers=e),"seller-statusModifiers":{check:!0},"brand-status":l.selectedBrands,"onUpdate:brandStatus":t[1]||(t[1]=e=>l.selectedBrands=e),"brand-statusModifiers":{check:!0},sellers:n.sellersList,brands:n.brandsList,onSelectSeller:n.onSellerSelect,onSelectBrand:n.onBrandSelect},null,8,["seller-status","brand-status","sellers","brands","onSelectSeller","onSelectBrand"])]),(0,r.Wm)(o,{class:"page__content","products-data":n.filteredProductsList},null,8,["products-data"])])])}a(560);var me=a(3577);const he=e=>((0,r.dD)("data-v-4b80ce08"),e=e(),(0,r.Cn)(),e),fe={class:"filter"},ge={ref:"sellersSection",class:"filter__item filter-element non-selected"},_e=he((()=>(0,r._)("h4",{class:"filter-element__title"},"Продавець",-1))),ye={class:"filter-element__list"},ke=["value","onChange"],be={ref:"productsSection",class:"filter__item filter-element non-selected"},ve=he((()=>(0,r._)("h4",{class:"filter-element__title"},"Бренд",-1))),Se={class:"filter-element__input"},De={class:"filter-element__list"},we=["value","onChange"];function Ve(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("div",fe,[(0,r._)("div",ge,[_e,(0,r._)("ul",ye,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.sellers,((a,l)=>((0,r.wg)(),(0,r.iD)("li",{key:l,class:"filter-element__item"},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedSellerStatus=e),type:"checkbox",value:a,onChange:t=>e.$emit("selectSeller",a)},null,40,ke),[[s.e8,i.selectedSellerStatus]]),(0,r.Uk)(" "+(0,me.zw)(a),1)])])))),128))])],512),(0,r._)("div",be,[ve,(0,r._)("div",Se,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.searchedBrand=e),type:"search",placeholder:"Пошук"},null,512),[[s.nr,n.searchedBrand]])]),(0,r._)("ul",De,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.filteredBrandsList,((a,l)=>((0,r.wg)(),(0,r.iD)("li",{key:l,class:"filter-element__item"},[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.selectedBrandStatus=e),type:"checkbox",value:a,onChange:t=>e.$emit("selectBrand",a)},null,40,we),[[s.e8,i.selectedBrandStatus]]),(0,r.Uk)(" "+(0,me.zw)(a),1)])])))),128))])],512)])}var xe={name:"ProductsFilter",props:{sellers:{type:Array,default:()=>[]},brands:{type:Array,default:()=>[]},sellerStatus:{type:Array,default:()=>[]},sellerStatusModifiers:{type:Object,default:()=>({})},brandStatus:{type:Array,default:()=>[]},brandStatusModifiers:{type:Object,default:()=>({})}},emits:["selectBrand","selectSeller","update:sellerStatus","update:brandStatus"],data(){return{searchedBrand:null}},computed:{filteredBrandsList(){const e=this.brands.filter((e=>!(!e||!this.searchedBrand)&&e.toLowerCase().includes(this.searchedBrand.toLowerCase())));return e.length?e:this.brands},selectedSellerStatus:{get(){return this.sellerStatus},set(e){this.sellerStatusModifiers.check&&(0!==e.length?this.$refs.sellersSection.classList.remove("non-selected"):this.$refs.sellersSection.classList.add("non-selected")),this.$emit("update:sellerStatus",e)}},selectedBrandStatus:{get(){return this.brandStatus},set(e){this.brandStatusModifiers.check&&(0!==e.length?this.$refs.productsSection.classList.remove("non-selected"):this.$refs.productsSection.classList.add("non-selected")),this.$emit("update:brandStatus",e)}}}};const Ue=(0,h.Z)(xe,[["render",Ve],["__scopeId","data-v-4b80ce08"]]);var Ce=Ue;const Le={class:"products-list"};function Me(e,t,a,s,l,n){const i=(0,r.up)("product-card");return(0,r.wg)(),(0,r.iD)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.productsData,(e=>((0,r.wg)(),(0,r.j4)(i,{key:e.id,"product-data":e,class:"products-list__item"},null,8,["product-data"])))),128))])}const Ie=["href"],Pe={class:"product-card__img"},Ae=["src","alt"],Be={class:"product-card__title"},$e={class:"product-card__price"};function je(e,t,a,s,l,n){return(0,r.wg)(),(0,r.iD)("a",{class:"product-card",href:a.productData.href},[(0,r._)("div",Pe,[(0,r._)("img",{src:a.productData.img,alt:a.productData.title},null,8,Ae)]),(0,r._)("div",Be,(0,me.zw)(a.productData.title),1),(0,r._)("div",$e,[(0,r._)("span",null,(0,me.zw)(a.productData.price),1),(0,r.Uk)("₴ ")])],8,Ie)}var Fe={name:"ProductCard",props:{productData:{type:Object,default:()=>({})}}};const Oe=(0,h.Z)(Fe,[["render",je],["__scopeId","data-v-03d24494"]]);var ze=Oe,Te={name:"ProductsList",components:{ProductCard:ze},props:{productsData:{type:Array,default:()=>[]}}};const Ne=(0,h.Z)(Te,[["render",Me],["__scopeId","data-v-a08049c6"]]);var Re=Ne;const He=[{id:386766864,title:'Ноутбук ASUS TUF Gaming A15 (2023) FA507NV-LP031 (90NR0E88-M004H0) Jaeger Gray / 15.6" IPS Full HD 144 Гц / AMD Ryzen 7 7735HS / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 4060',price:49999,href:"https://rozetka.com.ua/ua/asus-90nr0e88-m004h0/p386766864/",img:"https://content.rozetka.com.ua/goods/images/big/349586929.jpg",brand:"ASUS",seller:"Rozetka"},{id:372852162,title:'Ноутбук ASUS TUF Gaming F15 FX506HF-HN038 (90NR0HB4-M00520) Graphite Black / 15.6" IPS Full HD 144 Гц / Intel Core i5-11400H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 2050',price:31999,href:"https://rozetka.com.ua/ua/asus-90nr0hb4-m00520/p372852162/",img:"https://content.rozetka.com.ua/goods/images/big/323437245.jpg",brand:"ASUS",seller:"Інші продавці"},{id:332906383,title:"Ноутбук HP Pavilion Gaming 15-ec2024ua (5A0U9EA) Shadow Black",price:45999,href:"https://rozetka.com.ua/ua/hp-5a0u9ea/p332906383/",img:"https://content.rozetka.com.ua/goods/images/big/248528822.jpg",brand:"HP",seller:"Rozetka"},{id:389350566,title:"Ноутбук HP Omen Gaming 16-wf0004ua (825H7EA) Shadow Black",price:69999,href:"https://rozetka.com.ua/ua/hp-825h7ea/p389350566/",img:"https://content1.rozetka.com.ua/goods/images/big/354272908.jpg",brand:"HP",seller:"Інші продавці"},{id:389481501,title:'Ноутбук Lenovo LOQ 15IRH8 (82XV00K8RA) Storm Grey / 15.6" IPS Full HD 144 Гц / Intel Core i5-12450H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 4060',price:49999,href:"https://rozetka.com.ua/ua/lenovo-82xv00k8ra/p389481501/",img:"https://content1.rozetka.com.ua/goods/images/big/375558269.jpg",brand:"Lenovo",seller:"Rozetka"},{id:384169314,title:"Новий ноутбук Dell Inspiron 3511 / Intel Core i5-1135G7 / 16 GB ОЗП / Накопичувач 512 GB / Intel Iris Xe Graphics / матовый, LED, WVA / для дома и офиса",price:24770,href:"https://rozetka.com.ua/ua/384169314/p384169314/",img:"https://content.rozetka.com.ua/goods/images/big/276402996.jpg",brand:"Dell",seller:"Інші продавці"},{id:400573356,title:"Новий ноутбук Dell Inspiron 3511 / Intel Core i3-1115G4 / 8 ГБ ОЗП / Накопичувач 256 ГБ / для офісу та дому",price:21951,href:"https://rozetka.com.ua/ua/400573356/p400573356/",img:"https://touch.com.ua/upload/resize_cache/webp/iblock/6vj/500_500_1/6vjx6532r0hpx3z1c2pkb3bescpc3cdu.webp",brand:"Dell",seller:"Rozetka"}];var Ee={name:"ProductsPage",components:{ProductsFilter:Ce,ProductsList:Re},data(){return{laptopsData:He,selectedSellers:[],selectedBrands:[],selectedSellersList:[],selectedBrandsList:[]}},computed:{sellersList(){return[...new Set(this.laptopsData.map((e=>e.seller)))]},brandsList(){return[...new Set(this.laptopsData.map((e=>e.brand)))]},filteredProductsList(){return 0===this.selectedBrandsList.length&&0===this.selectedSellersList.length?this.laptopsData:this.laptopsData.filter((e=>{const t=0===this.selectedBrandsList.length||this.selectedBrandsList.includes(e.brand),a=0===this.selectedSellersList.length||this.selectedSellersList.includes(e.seller);return t&&a}))}},methods:{onSellerSelect(e){this.selectedSellersList.includes(e)?this.selectedSellersList=this.selectedSellersList.filter((t=>t!==e)):this.selectedSellersList.push(e)},onBrandSelect(e){this.selectedBrandsList.includes(e)?this.selectedBrandsList=this.selectedBrandsList.filter((t=>t!==e)):this.selectedBrandsList.push(e)}}};const Ge=(0,h.Z)(Ee,[["render",pe],["__scopeId","data-v-0235d626"]]);var Ze=Ge;const We={class:"sixth-task"},Ke=(0,r._)("h2",{class:"sixth-task__title"},"Задача 6.",-1),Xe=(0,r._)("p",{class:"sixth-task__text"}," Створити компонент - форму для вводу даних кредитної карти (на зразок поданого прикладу). При вводі “EXPIRY DATE” розділювач “/” додається автоматично. ",-1);function Ye(e,t,a,s,l,n){const i=(0,r.up)("payment-form");return(0,r.wg)(),(0,r.iD)("div",We,[Ke,Xe,(0,r.Wm)(i,{"card-number":l.card,"onUpdate:cardNumber":t[0]||(t[0]=e=>l.card=e),"card-numberModifiers":{digitsOnly:!0,separate4Digits:!0},"expiry-date":l.date,"onUpdate:expiryDate":t[1]||(t[1]=e=>l.date=e),"expiry-dateModifiers":{separateDate:!0},"secure-code":l.code,"onUpdate:secureCode":t[2]||(t[2]=e=>l.code=e)},null,8,["card-number","expiry-date","secure-code"])])}const qe=e=>((0,r.dD)("data-v-609fe3c5"),e=e(),(0,r.Cn)(),e),Je={action:"#",method:"POST",class:"payment-form"},Qe={class:"payment-form__container"},et={class:"payment-form__line"},tt=qe((()=>(0,r._)("div",{class:"payment-form__label"},[(0,r._)("label",{for:"card-number"}," CARD NUMBER ")],-1))),at={class:"payment-form__input"},st={class:"payment-form__line"},rt=qe((()=>(0,r._)("div",{class:"payment-form__label"},[(0,r._)("label",{for:"date"}," EXPIRY DATE ")],-1))),lt={class:"payment-form__input"},nt={class:"payment-form__line"},it=qe((()=>(0,r._)("div",{class:"payment-form__label"},[(0,r._)("label",{for:"code"}," SECURE CODE ")],-1))),ot={class:"payment-form__input"};function dt(e,t,a,l,n,i){return(0,r.wg)(),(0,r.iD)("form",Je,[(0,r._)("div",Qe,[(0,r._)("div",et,[tt,(0,r._)("div",at,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{id:"card-number",ref:"cardNumber",key:n.updateKey,"onUpdate:modelValue":t[0]||(t[0]=e=>i.cardNumberValue=e),maxlength:"19",type:"text"})),[[s.nr,i.cardNumberValue]])]),(0,r._)("div",null,(0,me.zw)(i.cardNumberValue),1)]),(0,r._)("div",st,[rt,(0,r._)("div",lt,[(0,r.wy)((0,r._)("input",{id:"date",ref:"date","onUpdate:modelValue":t[1]||(t[1]=e=>i.expiryDateValue=e),type:"text",maxlength:"5",placeholder:"MM / YY"},null,512),[[s.nr,i.expiryDateValue]])])]),(0,r._)("div",nt,[it,(0,r._)("div",ot,[(0,r.wy)((0,r._)("input",{id:"code","onUpdate:modelValue":t[2]||(t[2]=e=>i.secureCodeValue=e),type:"password",maxlength:"3"},null,512),[[s.nr,i.secureCodeValue]])])])])])}var ut={name:"PaymentForm",props:{cardNumber:{type:String,default:""},cardNumberModifiers:{type:Object,default:()=>({})},expiryDate:{type:String,default:""},expiryDateModifiers:{type:Object,default:()=>({})},secureCode:{type:String,default:""},secureCodeModifiers:{type:Object,default:()=>({})}},emits:["update:cardNumber","update:expiryDate","update:secureCode"],data(){return{updateKey:0}},computed:{cardNumberValue:{get(){return this.cardNumber},set(e){this.cardNumberModifiers.digitsOnly&&(e=e.replace(/\D/g,""),this.$nextTick((()=>{this.updateKey++,this.$nextTick((()=>{this.$refs.cardNumber.focus()}))}))),this.cardNumberModifiers.separate4Digits&&(e=e.replace(/(\d{4}(?=.+))/g,"$1 ")),this.$emit("update:cardNumber",e)}},expiryDateValue:{get(){return this.expiryDate},set(e){this.expiryDateModifiers.separateDate&&2===e.length&&(e=e.concat("/")),this.$emit("update:expiryDate",e)}},secureCodeValue:{get(){return this.secureCode},set(e){this.$emit("update:secureCode",e)}}}};const ct=(0,h.Z)(ut,[["render",dt],["__scopeId","data-v-609fe3c5"]]);var pt=ct,mt={name:"SixthTask",components:{PaymentForm:pt},data(){return{card:null,date:null,code:null}}};const ht=(0,h.Z)(mt,[["render",Ye]]);var ft=ht,gt={name:"App",components:{FirstTask:k,SecondTask:P,ThirdTask:E,FourthTask:le,ProductsPage:Ze,SixthTask:ft}};const _t=(0,h.Z)(gt,[["render",i]]);var yt=_t;(0,s.ri)(yt).mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,l){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],l=e[u][2];for(var i=!0,o=0;o<s.length;o++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](s[o])}))?s.splice(o--,1):(i=!1,l<n&&(n=l));if(i){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,r,l]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,l,n=s[0],i=s[1],o=s[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(o)var u=o(a)}for(t&&t(s);d<n.length;d++)l=n[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},s=self["webpackChunkvue_home_task_lesson_06"]=self["webpackChunkvue_home_task_lesson_06"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(604)}));s=a.O(s)})();
//# sourceMappingURL=app.187fde98.js.map