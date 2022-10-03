
/*
clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
*/

let cards = [
    { nLabel: "J", nValue: 11, eSuit: "s", isJoker: false, nGroupId: 0 },
    { nLabel: "Q", nValue: 12, eSuit: "s", isJoker: false, nGroupId: 0 },
    { nLabel: "K", nValue: 13, eSuit: "s", isJoker: true, nGroupId: 0 },

    { nLabel: "J", nValue: 11, eSuit: "d", isJoker: false, nGroupId: 1 },
    { nLabel: "Q", nValue: 12, eSuit: "h", isJoker: false, nGroupId: 1 },
    { nLabel: "K", nValue: 13, eSuit: "d", isJoker: false, nGroupId: 1 },

    { nLabel: "A", nValue: 1, eSuit: "s", isJoker: false, nGroupId: 2 },
    { nLabel: "2", nValue: 2, eSuit: "s", isJoker: true, nGroupId: 2 },
    { nLabel: "8", nValue: 8, eSuit: "s", isJoker: false, nGroupId: 2 },
    { nLabel: "9", nValue: 9, eSuit: "s", isJoker: false, nGroupId: 2 },

    { nLabel: "5", nValue: 5, eSuit: "c", isJoker: false, nGroupId: 3 },
    { nLabel: "6", nValue: 6, eSuit: "c", isJoker: false, nGroupId: 3 },

    { nLabel: "2", nValue: 2, eSuit: "d", isJoker: true, nGroupId: 4 },
    { nLabel: "3", nValue: 3, eSuit: "d", isJoker: false, nGroupId: 4 },
    { nLabel: "8", nValue: 8, eSuit: "d", isJoker: false, nGroupId: 4 },

    { nLabel: "5", nValue: 5, eSuit: "h", isJoker: false, nGroupId: 5 },
    { nLabel: "6", nValue: 6, eSuit: "h", isJoker: false, nGroupId: 5 },
    { nLabel: "k", nValue: 13, eSuit: "h", isJoker: false, nGroupId: 5 },

    { nLabel: "6", nValue: 6, eSuit: "c", isJoker: false, nGroupId: 6 },
    { nLabel: "8", nValue: 8, eSuit: "s", isJoker: false, nGroupId: 6 },
    { nLabel: "7", nValue: 7, eSuit: "d", isJoker: false, nGroupId: 6 },
    { nLabel: "10", nValue: 10, eSuit: "d", isJoker: false, nGroupId: 6 },

    { nLabel: "A", nValue: 1, eSuit: "d", isJoker: false, nGroupId: 7 },
    { nLabel: "J", nValue: 10, eSuit: "d", isJoker: false, nGroupId:7 },
    { nLabel: "Q", nValue: 11, eSuit: "d", isJoker: false, nGroupId: 7 },
    { nLabel: "K", nValue: 12, eSuit: "d", isJoker: false, nGroupId: 7 },
    { nLabel: "K", nValue: 13, eSuit: "d", isJoker: false, nGroupId: 7 },

    {nLabel: "A",nValue: 1,eSuit: "spades",isJoker: false,nGroupId: 8,},
    {nLabel: "Q",nValue: 12,eSuit: "spades",isJoker: false,nGroupId: 8,},
    {nLabel: "K",nValue: 13,eSuit: "spades",isJoker: false,nGroupId: 8,},
]

let nCardLength = 0;
var k = 0;
while (nCardLength != cards.length) {
    var newCard = [];
    var nScore = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].nGroupId === nCardLength) {
            newCard.push(cards[i]);
        }
    }
    
    if (newCard.length == 0) {
        break;
    }
    document.getElementById("divResult").innerHTML += `<div class="lblScore"></div>`;

    for (let i = 0; i < newCard.length; i++) {
        if (newCard[i].nValue === 13) {
            for (let j = 0; j <newCard.length; j++) {
             if (newCard[j].nValue ===1) {
                newCard[j].nValue = 14;
             }     
            }
        } 
    }

    
    newCard.sort((a, b) => {
        return a.nValue - b.nValue;
    })
    
    let nCardValue = newCard[0].nValue;
    let strSuit = newCard[0].eSuit;
    let sequence = true;
    for (let i = 0; i < newCard.length; i++) {
        if (((strSuit !== newCard[i].eSuit) || (nCardValue !== newCard[i].nValue))) {
            sequence = false;
            break;
        }
        nCardValue++;
    }


    if (sequence === false) {
        for (let i = 0; i < newCard.length; i++) {
            if ((newCard[i].nValue > 10 || newCard[i].nValue === 1) && (newCard[i].isJoker === false)) {
                nScore = nScore + 10;
            }
            
            else if ((newCard[i].nValue < 10) && (newCard[i].nValue > 1) && (newCard[i].isJoker === false)) {
                nScore = nScore + newCard[i].nValue;
            }
            else {
                nScore += 0;
            }
        }
    }
    
    else {
        nScore += 0;
    }
    // console.log("--------------------------------");
    // console.log("Score : " + nScore);
    console.log(newCard);
    
    document.querySelectorAll(".lblScore")[document.querySelectorAll(".lblScore").length-1].innerText = `The Score of Group ${k} - is ${nScore}`;
    

    k++;
    nCardLength++;
}

