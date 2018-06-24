const ato = (a) => {
  let obj ={};
  a.forEach(item=>{
      obj[item.id] = item.sellCount
  })
  return obj
}

const mapDate = (data, back) => {
  return data.map(item => {
    item.foods.map(back)
    return item
  })
}

const filter = (a, b) => {
  mapDate(b, (food) => {
    Object.keys(a).map(key => {
      if (key * 1 === food.id) {
        food.sellCount = a[key];
      }
    })
    return food
  })
}

export {
  ato,
  filter,
  mapDate
}
