import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Ping from "../../assets/Images/placeholder.png";

const position = [40.752348, -73.979282];

const customIcon = L.icon({
  iconUrl: Ping,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function MapSection() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "600px" }} // Stil za mapu
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>We are here! {/* Ovdje možeš dodati tekst */}</Popup>
      </Marker>
    </MapContainer>
  );
}
