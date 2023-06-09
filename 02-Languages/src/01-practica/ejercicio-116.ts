// ZZCrypt

// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  return secret
    .replace(/ /gi, "#")
    .split("")
    .map((el) => {
      if (el !== "#") { 
        return plain.charAt(cipher.indexOf(el))
      } else {
        return el
      };
    })
    .join("")
    .replace(/[#]/gi, " ");
}

console.log(decrypt(secret));
