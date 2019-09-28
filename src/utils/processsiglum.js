export default function recognizeSiglum(siglum) {
    // const reg2 = /((?:\d\s)?[a-zA-Z]{1,3})\s?(\d+\s?)?[,:]?\s?(\d+(?:\s?-\s?\d+)?)?/;
    const reg2 = /((?:\d\s)?[a-zA-Z]{1,3})\s?(\d+\s?)?[,:]?\s?(\d+(?:[\s.\-\d]{1,}))?/;
    let sg = siglum.trim().split(';').filter(el => el !== '');

    const reconed = sg.map(function(el){
        let regexed = reg2.exec(el);
        if(regexed.length > 1) regexed.shift();
        return {
            book: regexed[0],
            chapter: regexed[1] || [],
            verses: turnRangeToArray(regexed[2])
        };
    });
    return reconed;
}

function turnRangeToArray(range = '') {
    if(range === '') return [];

    const ranges = range
                .replace(' ', '')
                .split('.')
                .filter(el => el !== '');

    const newRanges = ranges.map(el => {
        return processRanges(el);
    })
    return [].concat(...newRanges);
}

function processRanges(range) {
    const ranges = range.split('-')
                        .filter(el => el !== '');
    if(ranges.length === 1) return parseInt(ranges[0]);

    const verses = [];
    for (let i = ranges[0]; i <= ranges[1]; i++) {
        verses.push(parseInt(i));
    }
    return verses;
}