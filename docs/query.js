let invData, storeData

fetch('invs.json').then(d => d.json()).then(d => { invData = d; console.log('Inv data', invData) })
fetch('stores.json').then(d => d.json()).then(d => { storeData = d })

const locations = []

function showEntriesForItemName (name) {
  let html = ''
  const results = {}

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
      const clickUrl = `https://www.grubhub.com/restaurant/mcdonalds-5765-broadway-bronx/${storeEntry.storeId}/menu-item/${entry.id}?menu-item-options=`
      locations.push({ id: storeEntry.storeId, lat: store.address.latitude, lng: store.address.longitude, name: storeAddress, working: true })
      results[storeEntry.storeId + entry.name] ??= []
      results[storeEntry.storeId + entry.name].push({ imgUrl, entry, store, storeAddress, clickUrl })
    }
  }

  for (const storeId in storeData) {
    if (!locations.some(l => l.id === storeId)) {
      const store = storeData[storeId]
      locations.push({ id: storeId, lat: store.address.latitude, lng: store.address.longitude, name: store.address.street_address, working: false })
      // console.log('Broken store', store)
    }
  }

  for (const storeId in results) {
    const { imgUrl, entry, store, storeAddress, clickUrl } = results[storeId][0]
    const prices = new Set()
    for (const result of results[storeId]) {
      prices.add(result.entry.price.amount)
    }
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
          <h3>${[...prices].map(priceToString).join(' / ')}</h3>
        </div>
        <hr />
        <div class='item'>
          <h3><a href="${clickUrl}">${storeAddress}</a></h3>
          <h4>${store.name}</h4>
        </div>
      </div>
    </div>    
  `
  }
  document.querySelector('.cards').innerHTML = html
}

setTimeout(() => {
  // showEntriesForItemName('Plain Sundae')
}, 4000)

function openURL (url) {
  window.open(url, '_blank').focus()
}

function priceToString (price) {
  return '$' + (price / 100)
}

function showMap () {
  if (!locations.length) return alert('Please search for an item first')
  document.querySelector('.cards').innerHTML = `
    <iframe id="frame" src="map.html?6" style="width:80vw;height:80vh;" />
  `
  setTimeout(() => {
    const frame = document.querySelector('#frame')
    frame.contentWindow.postMessage({ type: 'showPoints', data: locations })
  }, 500)
}
