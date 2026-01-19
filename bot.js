const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return ["Hello! My Name is lala. What's your name?",
    `Hello ${data?.nama}, how old are u?`,
    `Ohh ${data?.usia}, what's ur hobby?`,
    `Wow, my hobby's ${data?.hobi} too!, btw have u a gf or bf?`,
    `Ohh ${data?.pacar}, Okayy I think that's enough ya?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value})
    }else if (init === 2) {
        botDelay({usia: jawaban.value})
    }else if (init === 3) {
        botDelay({hobi: jawaban.value})
    }else if (init === 4) {
        botDelay({pacar: jawaban.value})
    }else if (init === 5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser) [init]
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ${usersData[0]} for come to my page! 😉`
    jawaban.value = "ur welcome!"
}

function botEnd() {
    window.location.reload()
}