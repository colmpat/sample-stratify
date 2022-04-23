import getBins from "./getBins";
import shuffle from "./shuffle";
export default function stratify1d(data, x, k, reduction) {
    const bins = getBins(x, data, k);

    let sample = [],
        i = -1;
    bins.forEach(bin => {
        let shuffled = shuffle(bin.values)
        for(let d of shuffled) {
            if(++i % reduction == 0) sample.push(d);
        }
    })

    return sample;
}