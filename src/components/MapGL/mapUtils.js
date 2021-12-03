export const deg2rad = (deg) => {
    return (deg * Math.PI / 180);
}

export const distanceEarth = (p1, p2) => {
    const lat1r = deg2rad(p1[0]);
    const lon1r = deg2rad(p1[1]);
    const lat2r = deg2rad(p2[0]);
    const lon2r = deg2rad(p2[1]);

    const u = Math.sin((lat2r - lat1r)/2);
    const v = Math.sin((lon2r - lon1r)/2);
    return 2.0 * 6371.0 * Math.asin(Math.sqrt(u * u + Math.cos(lat1r) * Math.cos(lat2r) * v * v));
}
