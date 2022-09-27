const receivesAFunction = (callbbckFunc) => {
return callbbckFunc ();
}
const returnsANamedFunction = () =>{
function AFunc () {
    // write your code here!!
}
return AFunc;
}

const returnsAnAnonymousFunction = () => {
  return ()  =>  {};
  
}




