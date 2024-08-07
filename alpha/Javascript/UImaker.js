export let Uimaker = {
    elementmaker : (elementname, divclass = '', divid = '', content = '') => {
        let classed = divclass ? `class="${divclass}"` : '';
        let idd = divid ? `id="${divid}"` : '';
        return `<${elementname} ${[classed, idd].filter(attr => attr).join(' ')}>${content}</${elementname}>`;
    },
    mixerr : (array) => array.join('')
}

