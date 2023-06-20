//The way I did it

const buildTower = num => {
    let tower = []
    let towerStar = '*'

    for (let i = 0; i < num; i++){
        tower.push(towerStar)
        towerStar += '**'

        for (let k = 0; k < i; k++){
            tower[k] = ` ${tower[k]} `
        }
    }
    return tower.join(`\n`)
}

//Another way to do it
const towerFunc = n => {
    let towerArr = []

    for(let i = 0; i < n; i ++){
        let stars = '*'.repeat(1 + (i * 2))
        let spaces = ' '.repeat(n - (i + 1))

        let towerStr = `${spaces}${stars}${spaces}`
        towerArr.push(towerStr)
    }
    return towerArr.join(`\n`)
}


console.log(towerFunc(5))
console.log(buildTower(3))