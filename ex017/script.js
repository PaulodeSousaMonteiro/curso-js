function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var vtab = document.getElementById('vlt')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        var v = Number(vtab.value)
        tab.innerHTML = ''
        while (c <= v) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}