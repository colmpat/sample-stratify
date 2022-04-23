import getBins from "./getBins";
import shuffle from "./shuffle";
export default function stratify2d(data, x, y, k, reduction) {
    const xBins = getBins(x, data, k);

    let sample = [],
        i = -1;
    xBins.forEach(xBin => {
        const yBins = getBins(y, xBin.values, k);
        yBins.forEach(yBin => {
            const zBins = getBins(z, yBin.values, k);
            zBins.forEach(zBin => {
                let shuffled = shuffle(zBin.values)
                for(let d of shuffled) {
                    if(++i % reduction == 0) sample.push(d);
                }
            })
        })
    })

    return sample;
}