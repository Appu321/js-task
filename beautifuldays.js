<p class="number"></p>
<script>
beautifulDays(18,24,6);

function beautifulDays(i, j, k) {
    var a = Array(j-i+1); 

    console.log(a.fill(0)); 
    console.log(typeof(a));
    console.log(j - i + 1);
    
    return new Array(j - i + 1).fill(0).reduce((target, number, index) => { 
        console.log([...String(index + i)].reverse());
        console.log((Number([...String(index + i)].reverse().join(''))));
       
        (Number([...String(index + i)].reverse().join('')) - (index + i)) % k === 0 && ++target; 
        console.log(target);
        document.getElementByClass("number").innerHTML = target;
        return target;
    }, 0)
}
</script>