import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector(".feedback-form");let t={email:"",message:""};const l=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));t=e;for(const r in e)a.elements[r].value=e[r]}catch(e){console.log(e)}};l();a.addEventListener("change",e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault(),console.log(t),t.email!==""&&t.message!==""?(e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):alert("Fill please all fields")});
//# sourceMappingURL=2-form.js.map
