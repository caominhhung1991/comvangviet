import React, {useState} from 'react'
import {compose, withProps} from 'recompose'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'
import {MarkerWithLabel} from 'react-google-maps/lib/components/addons/MarkerWithLabel'

export const diadiems = {
  xuongSX: {
    id: 'xuongSX',
    name: 'Chi nhánh Osac Bình Dương',
    address: '40 Đường số 3, Hòa Phú, Thủ Dầu Một, Bình Dương',
    lat: 11.0638593,
    lng: 106.6936421,
  },
  vanphong: {
    id: 'vanphong',
    name: 'Văn phòng Cơm Vàng Việt',
    address: '..., Hồ Chí Minh',
    lat: 10.8216284,
    lng: 106.8065395,
  }
}

const MyGoogleMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGh8mfCJKIwUNmlK5kq6PY1hXWT1gdwHM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `350px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }), withScriptjs, withGoogleMap)((props) => {
    const {place} = props
    const [isMarkerClicked, setIsMarketClicked] = useState(true)

    const diadiem = diadiems[place] || diadiems.vanphong

    const center = {lat: diadiem.lat, lng: diadiem.lng}

    return (
      <GoogleMap defaultZoom={14} center={center}>
        <MarkerWithLabel
          position={center}
          labelAnchor={new window.google.maps.Point(130, 70)}
          labelStyle={{backgroundColor: "white", fontSize: "11px", padding: "5px"}}
          onClick={() => setIsMarketClicked(!isMarkerClicked)}
        >
          {
            isMarkerClicked ? <div>{diadiem.address}</div> : <div/>
          }
        </MarkerWithLabel>

        {/* {props.isMarkerShown && <Marker position={props.center} />} */}
      </GoogleMap>
    )
  }
)

export default MyGoogleMap
