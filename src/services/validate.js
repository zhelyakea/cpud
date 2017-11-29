export function phoneValidate(phone) {
  var expr = /((\+7|7|8)+([0-9]){10})$/;

  if (phone.match(expr)) {
    return true;
  } else {
    return false;
  }
}
