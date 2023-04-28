var invData, storeData

fetch('invs.json').then(d => d.json()).then(d => { invData = d; console.log('Inv data', invData) })
fetch('stores.json').then(d => d.json()).then(d => { storeData = d })

function showEntriesForItemName(name) {
  let html = ''
  for (const storeEntry of invData) {
    console.log('E', storeEntry, storeData)
    const store = storeData[storeEntry.storeId]
    const storeAddress = store.address.street_address
    for (const entry of storeEntry.items) {
      if (!entry.name.startsWith(name)) continue
      try {
        var imgUrl = entry.media_image.base_url + entry.media_image.public_id + '.' + entry.media_image.format
      } catch {
        var imgUrl = 'https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photosV2/c9c51089-97b3-49d2-9fb1-707b3ad9562f-retina-large.jpg'
      }
      let clickUrl = `https://www.grubhub.com/restaurant/mcdonalds-5765-broadway-bronx/${storeEntry.storeId}/menu-item/${entry.id}?menu-item-options=`;
       html += `
      <div class='card' onclick="openURL('${clickUrl}')" style='width:250px;height: 200px;border-radius:20px;'>
      <div class='image' style='
      position: absolute;
      background-image: url(${imgUrl});
        width: 250px;
        height: 200px;
        border-radius:20px;
        z-index:-1;
        filter:brightness(0.40);
      '></div>
      <div style='padding:3%'>
        <div class='item'>
          <h3>${entry.name}</h3>
          <h4>${priceToString(entry.price.amount)}</h4>
        </div>
        <hr />
        <div class='item'>
          <h3><a href="https://mcdonalds.com/">${storeAddress}</a></h3>
          <h4>${store.name}</h4>
        </div>
      </div>
    </div>    
  `
    }
  }
  document.querySelector('.cards').innerHTML = html
}

setTimeout(() => {
  // showEntriesForItemName('Plain Sundae')
}, 4000)


function openURL (url) {
  window.open(url, '_blank').focus();
}

function priceToString(price) {
  return '$' + (price / 100)
}