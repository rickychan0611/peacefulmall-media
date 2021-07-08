const getColor = (str) => {
    console.log(str)
    return (
        str === "本地" ? "#c26f03" :
        str === "加国" ? "#f52121" :
        str === "國際" ? "#165fd4" :
        str === "社区" ? "#4b8524" :
        str === "體育" ? "#bb52be" :
        str === "視像" ? "#2935df" :
        str === "影視" ? "#06a5b1" :
        str === "潮流" ? "#b3008c" :
        str === "生活" ? "#ce5c5c" : null
    )
}
export default getColor;