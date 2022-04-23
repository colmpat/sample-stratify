import extent from "./extent";
export default function getBins(variable, data, k) {
    // sort by variable
    data.sort((a,b) => a[variable] < b[variable] ? -1 : 1)

    let [min,max] = extent(data, d => d[variable])
    let binWidth = (max - min) / k
    let bins = [...Array(k)].map((_, i) => {
        return {min: binWidth * i + min, values:[]}
    });

    let b = 0;
    data.forEach(d => {
        if(b < k - 1 && d[variable] >= bins[b + 1].min) b++;
        bins[b].values.push(d);
    })
    return bins;
}