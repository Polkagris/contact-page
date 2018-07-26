  //grab value from input
  let input = document.querySelector('#filterInput');

  //Add eventlistener to input typing
  input.addEventListener('keyup', filterNames);


  //Function that filters the names
  function filterNames(){
    //Grab input value toUpperCase
    let inputV = input.value.toUpperCase();
    //grab ul
    let ul = document.querySelector('#names');
    //grab li from ul
    let li = ul.querySelectorAll('li.collection-item');

    //Loop through each anker-tag
    for(let i=0; i < li.length; i++){
      //grab anker tag from li[current iteration] because getElementsByTagName asks for array
      let a = li[i].getElementsByTagName('a')[0];
      //grab innerHTML of anker tag and set it to toUpperCase
      let name = a.innerHTML.toUpperCase();
      console.log(name);

      //Check if input value matches the innerHTML of the a-tag - greater than -1 means present
      if(name.indexOf(inputV) > -1 ){
        //If present do nothing to style
        a.style.display = '';
      }else{
        //If not present remove from page
        a.style.display = 'none';
      }
    }
}


























    // name = [...name];
    // //inputV = [...inputV];
    // let allNames = name.map((anker, index) => {
    //     name.map((character) =>{
    //         if(input.value.toUpperCase() == character.textContent.toUpperCase()){
    //         console.log('Match!');
    //         //console.log(anker.textContent.toUpperCase());
    //       }
    //     });
    //   // if(input.value.toUpperCase() == anker.textContent.toUpperCase()){
    //   //   console.log('Match!');
    //   //   console.log(anker.textContent.toUpperCase());
    //
    //           //console.log(anker.textContent);
    // });
    // console.log(actualName);



    // const category = document.querySelector('.mw-category');
    // const links = [...category.querySelectorAll('a')];
    // const de = links
    //                     .map(anker => anker.textContent)
    //                     .filter(street => street.includes('de'));

    //for(let i = 0; i < input.lenght; i++){
      //IF value typed[i] == Names[i]
      //if()
      //console.log(actualName[i]);
        //do nothing - display

      //ELSE change style to none so it dissapears



    //}

  //}
