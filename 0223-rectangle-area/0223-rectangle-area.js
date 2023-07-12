var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const bolge1 = (ax2 - ax1) * (ay2 - ay1);
  const bolge2 = (bx2 - bx1) * (by2 - by1);
  
  const kesismeGenislik = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const kesismeUzunluk = Math.min(ay2, by2) - Math.max(ay1, by1);
  const kesimeTotal = Math.max(kesismeGenislik, 0) * Math.max(kesismeUzunluk, 0);
  
  return bolge1 + bolge2 - kesimeTotal;
};

