var tostrip = document.getElementsByClassName("to-clamp");
for (let index = 0; index < tostrip.length; index++) {
    const element = tostrip[index];
    $clamp(element, {clamp: 'auto'});
}