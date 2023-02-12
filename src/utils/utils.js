


export const dateToStr = (publishedDate) => {
  var strSplitDate = String(publishedDate).split(' ');
  var date = new Date(strSplitDate[0]);
  // alert(date);
  var dd = publishedDate.getDate();
  var mm = publishedDate.getMonth() + 1; //January is 0!

  var yyyy = publishedDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  date = dd + "-" + mm + "-" + yyyy;
  return date.toString();
}
