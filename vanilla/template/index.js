function showContent() {
  let temp = document.getElementsByTagName("template")[0];
  const ArmyOfClones = temp.content.cloneNode(true);
  document.body.appendChild(ArmyOfClones);
}
