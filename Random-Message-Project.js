const motivationJenie = 
    ["I believe I Can Fly", "Never Despair", "You must unlearn what you have learned", "The World is a Malleable Place", "Seize the Day"];


const randomSelect = arr => {
    return Math.floor(Math.random() * arr.length)
};

const iNeedMotivation = (num, arr) => {
    return arr[num];
};

console.log(iNeedMotivation(randomSelect(motivationJenie), motivationJenie));


