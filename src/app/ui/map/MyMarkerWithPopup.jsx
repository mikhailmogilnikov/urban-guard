function MyMarkerWithPopup({
  coordinates,
  popupContent,
  YMapMarker,
  state,
  openPopup,
  closePopup,
}) {
  return (
    <YMapMarker coordinates={coordinates} zIndex={1}>
      <div className="my-marker">
        <button type="button" aria-label="openPopup" className="my-marker__pin" onClick={openPopup} />
        {!state && (
          <div className="my-marker__beacon">
            <div className="my-marker__animation" />
            <div className="my-marker__animation my-marker__animation-delay" />
          </div>
        )}
      </div>
      {state && (
        <div className="popup">
          <div className="popup__text">
            {popupContent}
            <button
              type="button"
              className="popup__alert-btn"
              onClick={() => {
                closePopup();
              }}
            >
              👉 Перейти
            </button>
          </div>
          <button type="button" className="popup__close" onClick={closePopup}>
            ✖
          </button>
        </div>
      )}
    </YMapMarker>
  );
}

export default MyMarkerWithPopup;
