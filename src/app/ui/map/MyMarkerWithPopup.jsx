function MyMarkerWithPopup({
  coordinates,
  popupContent,
  YMapMarker,
  state,
  openPopup,
  closePopup,
  markerState,
}) {
  let markerColor;
  switch (markerState) {
    case 'confirmed':
      markerColor = 'bg-red-600';
      break;
    case 'potential':
      markerColor = 'bg-yellow-500 dark:bg-yellow-400';
      break;
    default:
      markerColor = '';
  }
  return (
    <YMapMarker coordinates={coordinates} zIndex={1}>
      <div className="my-marker">
        <button
          type="button"
          aria-label="openPopup"
          className={`my-marker__pin absolute top-1/2 left-1/2 w-10 h-10 -mt-[2em] -ml-[1.2em] -rotate-45 cursor-pointer shadow-xl shadow-orange-500/20 ${markerColor}`}
          onClick={openPopup}
        />
        {!state && markerState === 'confirmed' && (
          <div className="absolute -z-[1] w-[3em] -translate-x-1/2">
            <div className="my-marker__animation absolute top-0 left-0 w-[3em] h-[3em] rounded-full" />
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
