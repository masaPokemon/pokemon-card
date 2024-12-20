


window.onload = function () {
  //bobyの最後にコピーしたダメカン要素の置き場を作成


  //各DOMを変数に定義 
  const coin = document.getElementById("coin");
  const getDeckButton = document.getElementById("set-btn");

  const p1SideOpen = document.getElementById("p1_side_open"); //202207アプデ
  const p1SideShuffle = document.getElementById("p1_side_shuffle"); //202207アプデ
  const p1SideGet1 = document.getElementById("p1_side_get1"); //202207アプデ
  const p1SideGet2 = document.getElementById("p1_side_get2"); //202207アプデ
  const p1SideGet3 = document.getElementById("p1_side_get3"); //202207アプデ
  const p1DeckRemaining = document.getElementById("p1_deck_remaining"); //202207アプデ
  const p1LostzoneRemaining = document.getElementById("p1_lostzone_remaining"); //202207アプデ
  const p1HandRemaining = document.getElementById("p1_hand_remaining"); //202207アプデ
  const p1TrashRemaining = document.getElementById("p1_trash_remaining"); //202207アプデ
  const p1LostzoneWrap = document.getElementById("p1_lostzone_wrap"); //202207アプデ
  const p1LostzoneSort = document.getElementById("p1_lostzone_sort"); //202207アプデ
  const p1LostzoneBtn = document.getElementById("p1_lostzone_btn"); //202207アプデ
  const p1HandSort = document.getElementById("p1_hand_sort") //202207アプデ
  const p1SideWrap = document.getElementById("p1_side_wrap");
  const p1BattleWrap = document.getElementById("p1_battle_wrap");
  const p1Bench1Wrap = document.getElementById("p1_bench1_wrap");
  const p1Bench2Wrap = document.getElementById("p1_bench2_wrap");
  const p1Bench3Wrap = document.getElementById("p1_bench3_wrap");
  const p1Bench4Wrap = document.getElementById("p1_bench4_wrap");
  const p1Bench5Wrap = document.getElementById("p1_bench5_wrap");
  const p1Bench6Wrap = document.getElementById("p1_bench6_wrap");
  const p1Bench7Wrap = document.getElementById("p1_bench7_wrap");
  const p1Bench8Wrap = document.getElementById("p1_bench8_wrap");
  const p1HandWrap = document.getElementById("p1_hand_wrap");
  const p1DrawWrap = document.getElementById("p1_draw_wrap");
  const p1TrashWrap = document.getElementById("p1_trash_wrap");
  const p1DeckWrap = document.getElementById("p1_deck_wrap");
  const p1DrawBtn = document.getElementById("p1_draw_btn");
  const p1ShuffleBtn = document.getElementById("p1_shuffle_btn");
  const p1DeckBtn = document.getElementById("p1_deck_btn");
  const p1Deck5 = document.getElementById("p1_deck_5");
  const p1Deck7 = document.getElementById("p1_deck_7");
  const p1Burn = document.getElementById("p1_burn");
  const p1Poison = document.getElementById("p1_poison");
  const p1Sleeping = document.getElementById("p1_sleeping");
  const p1Paralysis = document.getElementById("p1_paralysis");
  const p1Confusion = document.getElementById("p1_confusion");
  const p1GX = document.getElementById("p1_GX")
  const p1BattleToDeck = document.getElementById("p1_battle_to_deck")

  const p1FreeSpaceWrap = document.getElementById("p1_free_space_wrap");

  const stadiumWrap = document.getElementById("stadium_wrap");

  const leftCode = document.getElementById("left_code");

  const p1BattleDamageBox = document.getElementById("p1_battle_damage_box")
  const p1Bench1DamageBox = document.getElementById("p1_bench1_damage_box")
  const p1Bench2DamageBox = document.getElementById("p1_bench2_damage_box")
  const p1Bench3DamageBox = document.getElementById("p1_bench3_damage_box")
  const p1Bench4DamageBox = document.getElementById("p1_bench4_damage_box")
  const p1Bench5DamageBox = document.getElementById("p1_bench5_damage_box")
  const p1Bench6DamageBox = document.getElementById("p1_bench6_damage_box")
  const p1Bench7DamageBox = document.getElementById("p1_bench7_damage_box")
  const p1Bench8DamageBox = document.getElementById("p1_bench8_damage_box")

  const returnToDeck = document.getElementById("retuen_to_deck")
  const moveToTrash = document.getElementById("move_to_trash")
  // const goToCardPage = document.getElementById("go_to_card_page")
  const moveToTop = document.getElementById("move_to_top")
  const moveToBottom = document.getElementById("move_to_bottom")
  const reverseCard = document.getElementById("reverse_card")

  const openChildBtn = document.getElementById("open_window_btn")
  const childWindowSize = 'width=1200,height=1200,top=0,left=1800'

  openChildBtn.onclick = function () {
    obj_window = window.open('child.html', 'child', childWindowSize);
  }

  const douki = () => {
    obj_window.document.getElementById("p1_side_wrap").innerHTML = p1SideWrap.innerHTML;
    Array.from(obj_window.document.getElementById("p1_side_wrap").children).forEach(card => card.classList.add("hide"));
    obj_window.document.getElementById("stadium_wrap").innerHTML = stadiumWrap.innerHTML;
    obj_window.document.getElementById("p1_free_space_wrap").innerHTML = p1FreeSpaceWrap.innerHTML;
    obj_window.document.getElementById("p1_battle_wrap").innerHTML = p1BattleWrap.innerHTML;
    obj_window.document.getElementById("p1_bench1_wrap").innerHTML = p1Bench1Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench2_wrap").innerHTML = p1Bench2Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench3_wrap").innerHTML = p1Bench3Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench4_wrap").innerHTML = p1Bench4Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench5_wrap").innerHTML = p1Bench5Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench6_wrap").innerHTML = p1Bench6Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench6").style.display = document.getElementById("p1_bench6").style.display;
    obj_window.document.getElementById("p1_bench7_wrap").innerHTML = p1Bench7Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench7").style.display = document.getElementById("p1_bench7").style.display;
    obj_window.document.getElementById("p1_bench8_wrap").innerHTML = p1Bench8Wrap.innerHTML;
    obj_window.document.getElementById("p1_bench8").style.display = document.getElementById("p1_bench8").style.display;
    obj_window.document.getElementById("p1_lostzone_wrap").innerHTML = p1LostzoneWrap.innerHTML;
    obj_window.document.getElementById("p1_hand_wrap").innerHTML = p1HandWrap.innerHTML;
    obj_window.document.getElementById("p1_draw_wrap").innerHTML = p1DrawWrap.innerHTML;
    // Array.from(obj_window.document.getElementById("p1_hand_wrap").children).forEach(card => card.classList.add("hide"));
    Array.from(obj_window.document.getElementById("p1_draw_wrap").children).forEach(card => card.classList.add("hide"));
    obj_window.document.getElementById("p1_trash_wrap").innerHTML = p1TrashWrap.innerHTML;
    obj_window.document.getElementById("p1_deck_wrap").innerHTML = p1DeckWrap.innerHTML;
    obj_window.document.getElementById("p1_burn").className = p1Burn.className;
    obj_window.document.getElementById("p1_poison").className = p1Poison.className;
    obj_window.document.getElementById("p1_sleeping").className = p1Sleeping.className;
    obj_window.document.getElementById("p1_paralysis").className = p1Paralysis.className;
    obj_window.document.getElementById("p1_confusion").className = p1Confusion.className;
    obj_window.document.getElementById("p1_GX").className = p1GX.className;
    obj_window.document.getElementById("deck_nokori").innerText = p1DeckWrap.childElementCount;
    obj_window.document.getElementById("p1_battle_damage_box").value = p1BattleDamageBox.value;
    obj_window.document.getElementById("p1_bench1_damage_box").value = p1Bench1DamageBox.value;
    obj_window.document.getElementById("p1_bench2_damage_box").value = p1Bench2DamageBox.value;
    obj_window.document.getElementById("p1_bench3_damage_box").value = p1Bench3DamageBox.value;
    obj_window.document.getElementById("p1_bench4_damage_box").value = p1Bench4DamageBox.value;
    obj_window.document.getElementById("p1_bench5_damage_box").value = p1Bench5DamageBox.value;
    obj_window.document.getElementById("p1_bench6_damage_box").value = p1Bench6DamageBox.value;
    obj_window.document.getElementById("p1_bench7_damage_box").value = p1Bench7DamageBox.value;
    obj_window.document.getElementById("p1_bench8_damage_box").value = p1Bench8DamageBox.value;
    obj_window.document.getElementById("p1_free_space").style.backgroundColor = document.getElementById('p1_free_space').style.backgroundColor;
    obj_window.document.getElementById("p1_side_child").style.backgroundColor = document.getElementById('p1_side_area').style.backgroundColor;
    obj_window.document.getElementById("p1_studium").style.backgroundColor = document.getElementById('p1_studium_bg').style.backgroundColor;
    obj_window.document.getElementById("p1_battle").style.backgroundColor = document.getElementById('p1_battle_bg').style.backgroundColor;
    obj_window.document.getElementById("p1_lostzone").style.backgroundColor = document.getElementById('p1_lostzone').style.backgroundColor;
    for (let i = 1; i < 9; i++) {
      obj_window.document.getElementById('p1_bench' + i).style.backgroundColor = document.getElementById('p1_bench' + i + "_bg").style.backgroundColor;
    }
    obj_window.document.getElementById("p1_hand_area").style.backgroundColor = document.getElementById('p1_hand_area').style.backgroundColor;
    obj_window.document.getElementById("p1_draw_area").style.backgroundColor = document.getElementById('p1_draw_area').style.backgroundColor;
    obj_window.document.getElementById("p1_trash_area").style.backgroundColor = document.getElementById('p1_trash_area').style.backgroundColor;

    if (p1FreeSpaceOpen.innerText == "カード公開中") {
      Array.from(obj_window.document.getElementById("p1_free_space_wrap").children).forEach(card => card.classList.remove("hide"));
    } else {
      Array.from(obj_window.document.getElementById("p1_free_space_wrap").children).forEach(card => card.classList.add("hide"));
    }

    if (p1HandOpen.innerText == "カード公開中") {
      Array.from(obj_window.document.getElementById("p1_hand_wrap").children).forEach(card => card.classList.remove("hide"));
    } else {
      Array.from(obj_window.document.getElementById("p1_hand_wrap").children).forEach(card => card.classList.add("hide"));
    }


  }

  // オブザーバーの作成
  const observer = new MutationObserver(records => {
    // 変化が発生したときの処理を記述
    douki()
  })

  const option = {
    childList: true,
    attributes: true,
    attributeFilter: ['class', 'style'],
    characterData: true,
  }
  observer.observe(p1SideWrap, option)
  observer.observe(p1BattleWrap, option)
  observer.observe(p1Bench1Wrap, option)
  observer.observe(p1Bench2Wrap, option)
  observer.observe(p1Bench3Wrap, option)
  observer.observe(p1Bench4Wrap, option)
  observer.observe(p1Bench5Wrap, option)
  observer.observe(p1Bench6Wrap, option)
  observer.observe(p1Bench7Wrap, option)
  observer.observe(p1Bench8Wrap, option)
  observer.observe(p1FreeSpaceWrap, option)
  observer.observe(stadiumWrap, option)
  observer.observe(p1HandWrap, option)
  observer.observe(p1LostzoneWrap, option)
  observer.observe(p1DrawWrap, option)
  observer.observe(p1TrashWrap, option)
  observer.observe(p1DeckWrap, option)
  observer.observe(p1DrawBtn, option)
  observer.observe(p1Burn, option)
  observer.observe(p1Poison, option)
  observer.observe(p1Sleeping, option)
  observer.observe(p1Paralysis, option)
  observer.observe(p1Confusion, option)
  observer.observe(p1GX, option)


  document.getElementById("p1_battle_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_battle_damage_box").value = e.target.value);
  document.getElementById("p1_bench1_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench1_damage_box").value = e.target.value);
  document.getElementById("p1_bench2_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench2_damage_box").value = e.target.value);
  document.getElementById("p1_bench3_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench3_damage_box").value = e.target.value);
  document.getElementById("p1_bench4_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench4_damage_box").value = e.target.value);
  document.getElementById("p1_bench5_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench5_damage_box").value = e.target.value);
  document.getElementById("p1_bench6_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench6_damage_box").value = e.target.value);
  document.getElementById("p1_bench7_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench7_damage_box").value = e.target.value);
  document.getElementById("p1_bench8_damage_box").addEventListener('input', (e) => obj_window.document.getElementById("p1_bench8_damage_box").value = e.target.value);

  let p1Deck;

  const p1FreeSpaceReverse = document.getElementById("p1_p1_free_space_reverse")
  const p1FreeSpaceToHand = document.getElementById("p1_p1_free_space_to_hand")
  const p1FreeSpaceToTrash = document.getElementById("p1_p1_free_space_to_trash")
  const moveToFreeSpace = document.getElementById("move_to_free_space")
  const p1DrawSpaceToHand = document.getElementById("p1_draw_to_hand")
  const p1DrawSpaceToDeck = document.getElementById("p1_draw_to_deck")
  const p1DrawSpaceToLost = document.getElementById("p1_draw_to_lost")
  const p1FreeSpaceOpen = document.getElementById("p1_free_space_open")
  const p1HandOpen = document.getElementById("p1_hand_open")

  // const p1FreeSpaceMoveToTop = document.getElementById("p1_p1_free_space_move_to_top")
  // const p1FreeSpaceBottom = document.getElementById("p1_p1_free_space_move_to_bottom")


  // p1FreeSpaceMoveToTop.onclick = function () {
  //   let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
  //   p1FreeSpaceArea.forEach(function (card) {
  //     p1DeckWrap.prepend(card)
  //   });
  // }

  // p1FreeSpaceBottom.onclick = function () {
  //   let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
  //   p1FreeSpaceArea.forEach(function (card) {
  //     p1DeckWrap.appendChild(card)
  //   });
  // }

  document.getElementById("p1_battle_damage_box_up").onclick = function () {
    document.getElementById("p1_battle_damage_box").value = Number(document.getElementById("p1_battle_damage_box").value) + 10;
    douki()
  }
  document.getElementById("p1_battle_damage_box_down").onclick = function () {
    if (Number(document.getElementById("p1_battle_damage_box").value > 10)) {
      document.getElementById("p1_battle_damage_box").value = Number(document.getElementById("p1_battle_damage_box").value) - 10;
      douki()
    } else {
      document.getElementById("p1_battle_damage_box").value = ""
      douki()
    }
  }

  for (let i = 1; i < 9; i++) {
    document.getElementById("p1_bench" + i + "_damage_box_up").onclick = function () {
      document.getElementById("p1_bench" + i + "_damage_box").value = Number(document.getElementById("p1_bench" + i + "_damage_box").value) + 10;
      douki()
    }
    document.getElementById("p1_bench" + i + "_damage_box_down").onclick = function () {
      if (Number(document.getElementById("p1_bench" + i + "_damage_box").value > 10)) {
        document.getElementById("p1_bench" + i + "_damage_box").value = Number(document.getElementById("p1_bench" + i + "_damage_box").value) - 10;
        douki()
      } else {
        document.getElementById("p1_bench" + i + "_damage_box").value = ""
        douki()
      }
    }
  }




  document.getElementById('p1_free_space').addEventListener('mouseover', function () {
    document.getElementById('p1_free_space').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_free_space').addEventListener('mouseout', function () {
    document.getElementById('p1_free_space').style.backgroundColor = "transparent";
    douki()
  });


  let p1SideColor = "transparent"

  document.getElementById('p1_side_area').addEventListener('mouseover', function () {
    document.getElementById('p1_side_area').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_side_area').addEventListener('mouseout', function () {
    document.getElementById('p1_side_area').style.backgroundColor = p1SideColor;
    douki()
  });



  let p1StudiumColor = "transparent"

  document.getElementById('p1_studium').addEventListener('mouseover', function () {
    if (document.getElementById('p1_studium_bg').style.backgroundColor != "lightgreen") {
      document.getElementById('p1_studium_bg').style.backgroundColor = "pink";
      douki()
    }
  });

  document.getElementById('p1_studium').addEventListener('mouseout', function () {
    document.getElementById('p1_studium_bg').style.backgroundColor = p1StudiumColor;
    douki()
  });

  document.getElementById('p1_studium_bg').onclick = function () {
    console.log(this.style.backgroundColor)
    if (this.style.backgroundColor == "lightgreen") {
      this.style.backgroundColor = "transparent";
      p1StudiumColor = "transparent";
      douki()
    } else {
      this.style.backgroundColor = "lightgreen";
      p1StudiumColor = "lightgreen";
      douki()
    }
  }


  let p1ButtleColor = "transparent"

  document.getElementById('p1_battle').addEventListener('mouseover', function () {
    if (document.getElementById('p1_battle_bg').style.backgroundColor != "lightgreen") {
      document.getElementById('p1_battle_bg').style.backgroundColor = "pink";
      douki()
    }
  });

  document.getElementById('p1_battle').addEventListener('mouseout', function () {
    document.getElementById('p1_battle_bg').style.backgroundColor = p1ButtleColor;
    douki()
  });


  document.getElementById('p1_battle_bg').onclick = function () {
    if (this.style.backgroundColor == "lightgreen") {
      this.style.backgroundColor = "transparent";
      p1ButtleColor = "transparent";
      douki()
    } else {
      this.style.backgroundColor = "lightgreen";
      p1ButtleColor = "lightgreen";
      douki()
    }
  }

  document.getElementById('p1_lostzone').addEventListener('mouseover', function () {
    document.getElementById('p1_lostzone').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_lostzone').addEventListener('mouseout', function () {
    document.getElementById('p1_lostzone').style.backgroundColor = "transparent";
    douki()
  });


  let p1BenchColor = {};

  for (let i = 1; i < 9; i++) {

    p1BenchColor[i] = "transparent"

    document.getElementById('p1_bench' + i).addEventListener('mouseover', function () {
      if (document.getElementById('p1_bench' + i + '_bg').style.backgroundColor != "lightgreen") {
        document.getElementById('p1_bench' + i + '_bg').style.backgroundColor = "pink";
        douki()
      }
    });

    document.getElementById('p1_bench' + i).addEventListener('mouseout', function () {
      document.getElementById('p1_bench' + i + '_bg').style.backgroundColor = p1BenchColor[i];
      douki()
    });

    document.getElementById('p1_bench' + i + '_bg').onclick = function () {
      if (this.style.backgroundColor == "lightgreen") {
        this.style.backgroundColor = "transparent";
        p1BenchColor[i] = "transparent";
        douki()
      } else {
        this.style.backgroundColor = "lightgreen";
        p1BenchColor[i] = "lightgreen";
        douki()
      }
    }
  }

  document.getElementById('p1_hand_area').addEventListener('mouseover', function () {
    document.getElementById('p1_hand_area').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_hand_area').addEventListener('mouseout', function () {
    document.getElementById('p1_hand_area').style.backgroundColor = "transparent";
    douki()
  });

  document.getElementById('p1_draw_area').addEventListener('mouseover', function () {
    document.getElementById('p1_draw_area').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_draw_area').addEventListener('mouseout', function () {
    document.getElementById('p1_draw_area').style.backgroundColor = "transparent";
    douki()
  });

  document.getElementById('p1_trash_area').addEventListener('mouseover', function () {
    document.getElementById('p1_trash_area').style.backgroundColor = "pink";
    douki()
  });

  document.getElementById('p1_trash_area').addEventListener('mouseout', function () {
    document.getElementById('p1_trash_area').style.backgroundColor = "transparent";
    douki()
  });

  document.getElementById("p1_uncheck").onclick = function () {
    for (let i = 1; i < 9; i++) {
      p1BenchColor[i] = "transparent"
      document.getElementById('p1_bench' + i + '_bg').style.backgroundColor = "transparent";
    }
    p1StudiumColor = "transparent"
    document.getElementById("p1_studium_bg").style.backgroundColor = "transparent";
    p1ButtleColor = "transparent"
    document.getElementById("p1_battle_bg").style.backgroundColor = "transparent";
    douki()
  }

  p1SideOpen.onclick = function () {
    let p1SideArea = Array.from(p1SideWrap.children)
    if (p1SideOpen.innerText == "表にする") {
      p1SideArea.forEach(function (card) {
        card.classList.remove("hide");
      });
      p1SideOpen.innerText = "裏にする"
      obj_window.document.getElementById('modal').classList.remove('hidden');
      obj_window.document.getElementById('mask').classList.remove('hidden');
      obj_window.document.getElementById('modal').innerText = "サイドを確認中"
      obj_window.document.getElementById('p1_side_child').style.backgroundColor = "#CC3366";
      document.getElementById('p1_side_area').style.backgroundColor = "#CC3366";
      p1SideColor = "#CC3366";
    } else if (p1SideOpen.innerText == "裏にする") {
      p1SideArea.forEach(function (card) {
        card.classList.add("hide");
      });
      p1SideOpen.innerText = "表にする"
      obj_window.document.getElementById('modal').innerText = "サイドを裏にしました"
      setTimeout(() => {
        obj_window.document.getElementById('modal').classList.add('hidden');
        obj_window.document.getElementById('mask').classList.add('hidden');
      }, 1000);
      obj_window.document.getElementById('p1_side_child').style.backgroundColor = "transparent";
      document.getElementById('p1_side_area').style.backgroundColor = "transparent";
      p1SideColor = "transparent";
    }


  }

  p1SideShuffle.onclick = function () {
    let temp = Array.from(p1SideWrap.children)
    temp.shuffle()
    p1SideWrap.innerHTML = ""
    temp.forEach(_node => p1SideWrap.appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "サイドをシャッフル"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1SideGet1.onclick = function () {
    for (let i = 0; i < 1; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "サイドを1枚取得"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1SideGet2.onclick = function () {
    for (let i = 0; i < 2; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "サイドを2枚取得"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1SideGet3.onclick = function () {
    for (let i = 0; i < 3; i++) {
      p1SideWrap.firstElementChild.classList.remove("hide");
      p1HandWrap.appendChild(p1SideWrap.firstElementChild)
    }
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "サイドを3枚取得"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  const p1DeckObserver = new MutationObserver(records => {
    p1DeckRemaining.innerText = p1DeckWrap.childElementCount;
  })
  p1DeckObserver.observe(p1DeckWrap, {
    childList: true
  })

  const p1LostzoneObserver = new MutationObserver(records => {
    p1LostzoneRemaining.innerText = p1LostzoneWrap.childElementCount;
  })
  p1LostzoneObserver.observe(p1LostzoneWrap, {
    childList: true
  })

  const p1HandObserver = new MutationObserver(records => {
    p1HandRemaining.innerText = p1HandWrap.childElementCount;
  })
  p1HandObserver.observe(p1HandWrap, {
    childList: true
  })

  const p1TrashObserver = new MutationObserver(records => {
    p1TrashRemaining.innerText = p1TrashWrap.childElementCount;
  })
  p1TrashObserver.observe(p1TrashWrap, {
    childList: true
  })



  p1BattleToDeck.onclick = function () {
    let battle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_battle_wrap").innerHTML = "";
    battle.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    p1BattleDamageBox.value = "";
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    if (document.getElementById("p1_battle_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_battle_bg").style.backgroundColor = "transparent";
      p1ButtleColor = "transparent"
    }
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "バトル場のカードをデッキに戻してシャッフルしました"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1LostzoneBtn.onclick = function () {
    if (document.getElementById("p1_lostzone").style.display == "none") {
      document.getElementById("p1_lostzone").style.display = "block";
      p1LostzoneBtn.innerText = "ロストゾーン非表示"
    } else {
      document.getElementById("p1_lostzone").style.display = "none";
      p1LostzoneBtn.innerText = "ロストゾーン表示"
    }
  }


  p1FreeSpaceOpen.onclick = function () {
    if (p1FreeSpaceOpen.innerText == "カード公開中") {
      p1FreeSpaceOpen.classList.add("on")
      p1FreeSpaceOpen.innerText = "カードは現在非公開"
      Array.from(obj_window.document.getElementById("p1_free_space_wrap").children).forEach(card => card.classList.add("hide"));
      obj_window.document.getElementById("p1_free_space_open").innerText = p1FreeSpaceOpen.innerText;
      obj_window.document.getElementById("p1_free_space_open").className = p1FreeSpaceOpen.className;
      douki()
    } else {
      p1FreeSpaceOpen.classList.remove("on")
      p1FreeSpaceOpen.innerText = "カード公開中"
      Array.from(obj_window.document.getElementById("p1_free_space_wrap").children).forEach(card => card.classList.remove("hide"));
      obj_window.document.getElementById("p1_free_space_open").innerText = p1FreeSpaceOpen.innerText;
      obj_window.document.getElementById("p1_free_space_open").className = p1FreeSpaceOpen.className;
      douki()
    }

  }


  p1HandOpen.onclick = function () {
    if (p1HandOpen.innerText == "カード公開中") {
      p1HandOpen.classList.add("on")
      p1HandOpen.innerText = "カードは現在非公開"
      Array.from(obj_window.document.getElementById("p1_hand_wrap").children).forEach(card => card.classList.add("hide"));
      obj_window.document.getElementById("p1_hand_open").innerText = p1HandOpen.innerText;
      obj_window.document.getElementById("p1_hand_open").className = p1HandOpen.className;
      douki()
    } else {
      p1HandOpen.classList.remove("on")
      p1HandOpen.innerText = "カード公開中"
      Array.from(obj_window.document.getElementById("p1_hand_wrap").children).forEach(card => card.classList.remove("hide"));
      obj_window.document.getElementById("p1_hand_open").innerText = p1HandOpen.innerText;
      obj_window.document.getElementById("p1_hand_open").className = p1HandOpen.className;
      douki()
    }

  }

  p1FreeSpaceReverse.onclick = function () {
    let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
    p1FreeSpaceArea.forEach(function (card) {
      if (!card.classList.contains("hide")) {
        card.classList.add("hide");
      } else if (card.classList.contains("hide")) {
        card.classList.remove("hide");
      }
    });
    douki()
  }

  p1FreeSpaceToHand.onclick = function () {
    let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
    p1FreeSpaceWrap.innerHTML = "";
    p1FreeSpaceArea.forEach(_node => p1HandWrap.appendChild(_node));
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "フリースペースからハンドに移動"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1FreeSpaceToTrash.onclick = function () {
    let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
    p1FreeSpaceWrap.innerHTML = "";
    p1FreeSpaceArea.forEach(_node => p1TrashWrap.appendChild(_node));
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "フリースペースからトラッシュに移動"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);

  }

  p1DrawSpaceToHand.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "ドローしたカードをハンドに追加"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1DrawSpaceToDeck.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    // p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    // let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    // document.getElementById("p1_hand_wrap").innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "ドロースペースのカードをデッキに戻してシャッフル"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }




  p1DrawSpaceToLost.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1LostzoneWrap.appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "ドローゾーンのカードをロストゾーンへ移動"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  //GETパラメータ取得
  const url = new URL(window.location.href);
  const params = url.searchParams;
  if (params.get('deck1')) {
    leftCode.value = params.get('deck1');
  }




  coin.onclick = function () {
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "コイントス実施"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
    coinCheck();
  }

  function coinSpin() {  //0.1秒後にコインの画像を反対にする
    return new Promise((resolve) => {
      setTimeout(() => {
        if (coin.src.match(".+/(.+?)([\?#;].*)?$")[1] == "coin.png") {
          coin.src = "img/coin_bk.png";
          obj_window.document.getElementById("coin").src = coin.src;
          resolve();
        } else {
          coin.src = "img/coin.png"
          obj_window.document.getElementById("coin").src = coin.src;
          resolve();
        }
      }, 100);
    })
  }

  async function coinCheck() {
    for (var i = 0; i < 8; i++) {
      await coinSpin();
    }
    if (Math.floor(Math.random() * 100) % 2 === 0) {
      coin.src = "img/coin.png";
      obj_window.document.getElementById("coin").src = coin.src;
    } else {
      coin.src = "img/coin_bk.png";
      obj_window.document.getElementById("coin").src = coin.src;
    }
  }

  Array.prototype.shuffle = function () { //
    let i = this.length;
    while (i) {
      let j = Math.floor(Math.random() * i);
      let t = this[--i];
      this[i] = this[j];
      this[j] = t;
    }
    return this;
  };


  document.addEventListener('click', function () {
    document.getElementById('contextmenu').style.display = "none";
  });


  function init(player) {  //カードに命を吹き込んでるところ
    let deck;
    let deckWrap;
    let hand;
    let side;
    let kasanariTrash;
    let kasanariDeck;
    if (player === "p1") {
      deck = p1Deck;
      deckWrap = document.getElementById("p1_deck_wrap");
      hand = document.getElementById("p1_hand_wrap");
      side = document.getElementById("p1_side_wrap");
      kasanariSide = p1SideWrap;
      kasanariBattle = p1BattleWrap;
      kasanariBench1 = p1Bench1Wrap;
      kasanariBench2 = p1Bench2Wrap;
      kasanariBench3 = p1Bench3Wrap;
      kasanariBench4 = p1Bench4Wrap;
      kasanariBench5 = p1Bench5Wrap;
      kasanariHand = p1HandWrap;
      kasanariDraw = p1DrawWrap;
      kasanariTrash = p1TrashWrap;
      kasanariDeck = p1DeckWrap;
    } else {
      return false
    }
    deck.shuffle()
    for (let i = 0; i < deck.length; i++) {
      let li = document.createElement("li");
      li.setAttribute("id", player + "_" + deck[i].id);
      li.classList.add("card");
      let img = document.createElement("img");
      img.setAttribute("src", deck[i].url);
      img.setAttribute("alt", deck[i].name);
      li.appendChild(img);
      deckWrap.appendChild(li);
      let card = document.getElementById(player + "_" + deck[i].id);
      card.addEventListener('contextmenu', function (event) {  //右クリックメニュー
        document.getElementById('contextmenu').style.position = "absolute";
        document.getElementById('contextmenu').style.top = event.clientY + window.pageYOffset - 174 + "px";
        document.getElementById('contextmenu').style.left = event.clientX + window.pageXOffset + "px";
        document.getElementById('contextmenu').style.display = "block";

        returnToDeck.onclick = function () {  //右クリックメニュー内のボタンを押された時の処理をここに書く
          kasanariDeck.appendChild(card)
          if (card.id.slice(0, 2) == "p1") {
            let temp = Array.from(document.getElementById("p1_deck_wrap").children)
            temp.shuffle()
            document.getElementById("p1_deck_wrap").innerHTML = ""
            temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
          }
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "カードを1枚デッキに戻してシャッフル"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);
        }
        moveToTrash.onclick = function () {
          kasanariTrash.appendChild(card)
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "カードを1枚トラッシュ"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);
        }
        // goToCardPage.onclick = function () {
        //   window.open(card.firstElementChild.getAttribute('src'), "cardPage", "width=374,height=522");
        // }
        moveToTop.onclick = function () {
          kasanariDeck.prepend(card)
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "カードを1枚デッキトップに移動"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);
        }
        moveToBottom.onclick = function () {
          kasanariDeck.appendChild(card)
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "カードを1枚デッキボトムに移動"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);
        }
        reverseCard.onclick = function () {
          if (!card.classList.contains("hide")) {
            card.classList.add("hide");
            obj_window.document.getElementById('modal').classList.remove('hidden');
            obj_window.document.getElementById('mask').classList.remove('hidden');
            obj_window.document.getElementById('modal').innerText = "カードを1枚裏にしました"
            setTimeout(() => {
              obj_window.document.getElementById('modal').classList.add('hidden');
              obj_window.document.getElementById('mask').classList.add('hidden');
            }, 1000);
          } else if (card.classList.contains("hide")) {
            card.classList.remove("hide");
            obj_window.document.getElementById('modal').classList.remove('hidden');
            obj_window.document.getElementById('mask').classList.remove('hidden');
            obj_window.document.getElementById('modal').innerText = "カードを1枚表にしました"
            setTimeout(() => {
              obj_window.document.getElementById('modal').classList.add('hidden');
              obj_window.document.getElementById('mask').classList.add('hidden');
            }, 1000);
          }
          douki()
        }
        saru.onclick = function () {
          if (card.id.slice(0, 2) == "p1") {
            document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
          }
          kasanariDeck.prepend(card)
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "さるぢえを使用"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);
        }
        moveToFreeSpace.onclick = function () {
          p1FreeSpaceWrap.prepend(card)
          obj_window.document.getElementById('modal').classList.remove('hidden');
          obj_window.document.getElementById('mask').classList.remove('hidden');
          obj_window.document.getElementById('modal').innerText = "カードを1枚フリースペースに移動"
          setTimeout(() => {
            obj_window.document.getElementById('modal').classList.add('hidden');
            obj_window.document.getElementById('mask').classList.add('hidden');
          }, 1000);

          // let p1FreeSpaceArea = Array.from(p1FreeSpaceWrap.children)
          // p1FreeSpaceWrap.innerHTML = "";
          // p1FreeSpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
        }
      });
      card.onmousedown = function () {
        document.getElementById('contextmenu').style.display = "none"; //右クリックメニューが開いてら閉じる
      }
    }
    for (let j = 0; j < 7; j++) {
      hand.appendChild(deckWrap.firstElementChild);
    }
    for (let k = 0; k < 6; k++) {
      let temp = deckWrap.firstElementChild;
      temp.classList.add("hide")
      side.appendChild(temp);
    }
    setTimeout(() => {
      douki()
    }, 500);
  }


  //山札ボタン  

  p1DrawBtn.onclick = function () {
    // document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    document.getElementById("p1_draw_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "山札から1枚ドロー"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  };

  p1ShuffleBtn.onclick = function () {
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "デッキをシャッフルしました。"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
    if (document.getElementById("p1_deck").style.display != "none") {
      document.getElementById("p1_deck").style.display = "none";
      p1Deck7.style.display = "none";
      p1DeckSort.style.display = "none";
      window.scrollTo(0, 0);
      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p1_deck_wrap").appendChild(_node)
      })
      p1DeckBtn.value = "デッキを見る"
      p1Deck5.value = "山上5枚見る"
      obj_window.document.getElementById('modal').classList.remove('hidden');
      obj_window.document.getElementById('mask').classList.remove('hidden');
      obj_window.document.getElementById('modal').innerText = "デッキをシャッフルして閉じました"
      setTimeout(() => {
        obj_window.document.getElementById('modal').classList.add('hidden');
        obj_window.document.getElementById('mask').classList.add('hidden');
      }, 1000);
      obj_window.document.getElementById('deck_child').style.backgroundColor = "transparent";
    }
  }

  p1DeckBtn.onclick = function () {

    if (document.getElementById("p1_deck").style.display == "none") {
      document.getElementById("p1_deck").style.display = "flex";
      p1DeckSort.style.display = "inline";
      window.scrollTo(0, document.body.scrollHeight);
      p1DeckBtn.value = "デッキを閉じる"
      p1Deck5.value = "シャッフル閉じる"
      obj_window.document.getElementById('modal').classList.remove('hidden');
      obj_window.document.getElementById('mask').classList.remove('hidden');
      obj_window.document.getElementById('modal').innerText = "デッキ確認中"
      obj_window.document.getElementById('deck_child').style.backgroundColor = "#CC3366";
    } else {
      document.getElementById("p1_deck").style.display = "none";
      p1Deck7.style.display = "none";
      p1DeckSort.style.display = "none";
      window.scrollTo(0, 0);
      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p1_deck_wrap").appendChild(_node)
      })
      p1DeckBtn.value = "デッキを見る"
      p1Deck5.value = "山上5枚見る"
      obj_window.document.getElementById('modal').innerText = "デッキをシャッフルしないで閉じました"
      setTimeout(() => {
        obj_window.document.getElementById('modal').classList.add('hidden');
        obj_window.document.getElementById('mask').classList.add('hidden');
      }, 1000);
      obj_window.document.getElementById('deck_child').style.backgroundColor = "transparent";
    }
  }

  p1Deck5.onclick = function () {
    if (document.getElementById("p1_deck").style.display == "none") {
      document.getElementById("p1_deck").style.display = "flex";
      p1Deck7.style.display = "inline";
      window.scrollTo(0, document.body.scrollHeight);

      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      document.getElementById("p1_deck_wrap").innerHTML = ""
      for (let i = 0; i < temp.length; i++) {
        if (i < 5) {
          document.getElementById("p1_deck_wrap").appendChild(temp[i])
        } else {
          temp[i].classList.add("hide")
          document.getElementById("p1_deck_wrap").appendChild(temp[i])
        }
      }

      p1DeckBtn.value = "デッキを閉じる"
      p1Deck5.value = "シャッフル閉じる"
      obj_window.document.getElementById('modal').classList.remove('hidden');
      obj_window.document.getElementById('mask').classList.remove('hidden');
      obj_window.document.getElementById('modal').innerText = "デッキトップ5枚確認中"
      obj_window.document.getElementById('deck_child').style.backgroundColor = "#CC3366";
    } else {
      document.getElementById("p1_deck").style.display = "none";
      p1Deck7.style.display = "none";
      p1DeckSort.style.display = "none";
      window.scrollTo(0, 0);
      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      temp.shuffle()
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => {
        _node.classList.remove("hide")
        document.getElementById("p1_deck_wrap").appendChild(_node)
      })
      p1DeckBtn.value = "デッキを見る"
      p1Deck5.value = "山上5枚見る"
      obj_window.document.getElementById('modal').innerText = "デッキをシャッフルして閉じました"
      setTimeout(() => {
        obj_window.document.getElementById('modal').classList.add('hidden');
        obj_window.document.getElementById('mask').classList.add('hidden');
      }, 1000);
      obj_window.document.getElementById('deck_child').style.backgroundColor = "transparent";
    }
  }

  p1Deck7.onclick = function () {
    let temp = document.getElementById("p1_deck_wrap").children;
    temp[5].classList.remove("hide");
    temp[6].classList.remove("hide");
    obj_window.document.getElementById('modal').innerText = "デッキトップ7枚確認中"
    obj_window.document.getElementById('deck_child').style.backgroundColor = "#CC3366";
  }


  //状態異常ボタン

  function statusAilmentButton(event) {
    buttonId = document.getElementById(event.target.id)
    if (buttonId.classList.contains("on")) {
      buttonId.classList.remove("on");
    } else {
      buttonId.classList.add("on");
    }
  }

  p1Burn.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Poison.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Sleeping.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Paralysis.onclick = (event) => {
    statusAilmentButton(event)
  };
  p1Confusion.onclick = (event) => {
    statusAilmentButton(event)
  };


  //フィールドボタン

  const stadiumTrash = document.getElementById("stadium_trash")

  stadiumTrash.onclick = function () {
    let stadium = Array.from(document.getElementById("stadium_wrap").children)
    document.getElementById("stadium_wrap").innerHTML = "";
    stadium.forEach((_node) => {
      if (_node.id.slice(0, 2) == "p1") {
        p1TrashWrap.appendChild(_node)
      }
    })
    document.getElementById("p1_studium_bg").style.backgroundColor = "transparent";
  }


  const p1BattleTrash = document.getElementById("p1_battle_trash")


  const p1B1Battle = document.getElementById("p1_b1_battle")
  const p1B1Trash = document.getElementById("p1_b1_trash")
  const p1B2Battle = document.getElementById("p1_b2_battle")
  const p1B2Trash = document.getElementById("p1_b2_trash")
  const p1B3Battle = document.getElementById("p1_b3_battle")
  const p1B3Trash = document.getElementById("p1_b3_trash")
  const p1B4Battle = document.getElementById("p1_b4_battle")
  const p1B4Trash = document.getElementById("p1_b4_trash")
  const p1B5Battle = document.getElementById("p1_b5_battle")
  const p1B5Trash = document.getElementById("p1_b5_trash")
  const p1B6Battle = document.getElementById("p1_b6_battle")
  const p1B6Trash = document.getElementById("p1_b6_trash")
  const p1B7Battle = document.getElementById("p1_b7_battle")
  const p1B7Trash = document.getElementById("p1_b7_trash")
  const p1B8Battle = document.getElementById("p1_b8_battle")
  const p1B8Trash = document.getElementById("p1_b8_trash")

  const p1HandTrash = document.getElementById("p1_hand_trash")
  const p1HandToDeck = document.getElementById("p1_hand_to_deck")
  const p1HandHakase = document.getElementById("p1_hand_hakase")
  const p1HandMarnie = document.getElementById("p1_hand_marnie")
  const p1HandMarnie2 = document.getElementById("p1_hand_marnie_2")
  const p1HandNanjamo = document.getElementById("p1_hand_nanjamo")
  const p1HandToDeckBottom = document.getElementById("p1_hand_to_deck_bottom")
  const p1MugenZone = document.getElementById("p1_mugen_zone")

  const p1DeckSort = document.getElementById("p1_deck_sort")
  const p1TrashSort = document.getElementById("p1_trash_sort")

  const p1Reset = document.getElementById("p1_reset")



  p1BattleTrash.onclick = function () {
    let battle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_battle_wrap").innerHTML = "";
    battle.forEach(_node => p1TrashWrap.appendChild(_node))
    p1BattleDamageBox.value = "";
    if (document.getElementById("p1_battle_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_battle_bg").style.backgroundColor = "transparent";
      p1ButtleColor = "transparent"
    }
    obj_window.document.getElementById("p1_battle_damage_box").value = "";
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "バトル場のカードをすべてトラッシュ"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }

  p1GX.onclick = function () {
    if (!p1GX.classList.contains("on")) {
      p1GX.classList.add("on");
    } else if (p1GX.classList.contains("on")) {
      p1GX.classList.remove("on");
    }
  }

  p1B1Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench1_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench1_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench1_wrap").appendChild(_node))
    let benchDamage = p1Bench1DamageBox.value
    p1Bench1DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench1_bg").style.backgroundColor;
    if (document.getElementById("p1_bench1_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench1_bg").style.backgroundColor = buttleColor;
    p1BenchColor[1] = buttleColor;
    douki()
  }
  p1B1Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench1_wrap").children)
    document.getElementById("p1_bench1_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench1DamageBox.value = "";
    if (document.getElementById("p1_bench1_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench1_bg").style.backgroundColor = "transparent";
      p1BenchColor[1] = "transparent"
    }
    obj_window.document.getElementById("p1_bench1_damage_box").value = "";
  }

  p1B2Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench2_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench2_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench2_wrap").appendChild(_node))
    let benchDamage = p1Bench2DamageBox.value
    p1Bench2DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench2_bg").style.backgroundColor;
    if (document.getElementById("p1_bench2_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench2_bg").style.backgroundColor = buttleColor;
    p1BenchColor[2] = buttleColor;
    douki()
  }
  p1B2Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench2_wrap").children)
    document.getElementById("p1_bench2_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench2DamageBox.value = "";
    if (document.getElementById("p1_bench2_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench2_bg").style.backgroundColor = "transparent";
      p1BenchColor[2] = "transparent"
    }
    obj_window.document.getElementById("p1_bench2_damage_box").value = "";
  }

  p1B3Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench3_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench3_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench3_wrap").appendChild(_node))
    let benchDamage = p1Bench3DamageBox.value
    p1Bench3DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench3_bg").style.backgroundColor;
    if (document.getElementById("p1_bench3_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench3_bg").style.backgroundColor = buttleColor;
    p1BenchColor[3] = buttleColor;
    douki()
  }
  p1B3Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench3_wrap").children)
    document.getElementById("p1_bench3_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench3DamageBox.value = "";
    if (document.getElementById("p1_bench3_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench3_bg").style.backgroundColor = "transparent";
      p1BenchColor[3] = "transparent"
    }
    obj_window.document.getElementById("p1_bench3_damage_box").value = "";
  }

  p1B4Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench4_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench4_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench4_wrap").appendChild(_node))
    let benchDamage = p1Bench4DamageBox.value
    p1Bench4DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench4_bg").style.backgroundColor;
    if (document.getElementById("p1_bench4_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench4_bg").style.backgroundColor = buttleColor;
    p1BenchColor[4] = buttleColor;
    douki()
  }
  p1B4Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench4_wrap").children)
    document.getElementById("p1_bench4_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench4DamageBox.value = "";
    if (document.getElementById("p1_bench4_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench4_bg").style.backgroundColor = "transparent";
      p1BenchColor[4] = "transparent"
    }
    obj_window.document.getElementById("p1_bench4_damage_box").value = "";
  }

  p1B5Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench5_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench5_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench5_wrap").appendChild(_node))
    let benchDamage = p1Bench5DamageBox.value
    p1Bench5DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench5_bg").style.backgroundColor;
    if (document.getElementById("p1_bench5_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench5_bg").style.backgroundColor = buttleColor;
    p1BenchColor[5] = buttleColor;
    douki()
  }
  p1B5Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench5_wrap").children)
    document.getElementById("p1_bench5_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench5DamageBox.value = "";
    if (document.getElementById("p1_bench5_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench5_bg").style.backgroundColor = "transparent";
      p1BenchColor[5] = "transparent"
    }
    obj_window.document.getElementById("p1_bench5_damage_box").value = "";
  }

  p1B6Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench6_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench6_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench6_wrap").appendChild(_node))
    let benchDamage = p1Bench6DamageBox.value
    p1Bench6DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench6_bg").style.backgroundColor;
    if (document.getElementById("p1_bench6_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench6_bg").style.backgroundColor = buttleColor;
    p1BenchColor[6] = buttleColor;
    douki()
  }
  p1B6Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench6_wrap").children)
    document.getElementById("p1_bench6_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench6DamageBox.value = "";
    if (document.getElementById("p1_bench6_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench6_bg").style.backgroundColor = "transparent";
      p1BenchColor[6] = "transparent"
    }
    obj_window.document.getElementById("p1_bench6_damage_box").value = "";
  }

  p1B7Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench7_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench7_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench7_wrap").appendChild(_node))
    let benchDamage = p1Bench7DamageBox.value
    p1Bench7DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench7_bg").style.backgroundColor;
    if (document.getElementById("p1_bench7_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench7_bg").style.backgroundColor = buttleColor;
    p1BenchColor[7] = buttleColor;
    douki()
  }
  p1B7Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench7_wrap").children)
    document.getElementById("p1_bench7_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench7DamageBox.value = "";
    if (document.getElementById("p1_bench7_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench7_bg").style.backgroundColor = "transparent";
      p1BenchColor[7] = "transparent"
    }
    obj_window.document.getElementById("p1_bench7_damage_box").value = "";
  }

  p1B8Battle.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench8_wrap").children)
    let batlle = Array.from(document.getElementById("p1_battle_wrap").children)
    document.getElementById("p1_bench8_wrap").innerHTML = "";
    document.getElementById("p1_battle_wrap").innerHTML = "";
    bench.forEach(_node => document.getElementById("p1_battle_wrap").appendChild(_node))
    batlle.forEach(_node => document.getElementById("p1_bench8_wrap").appendChild(_node))
    let benchDamage = p1Bench8DamageBox.value
    p1Bench8DamageBox.value = p1BattleDamageBox.value;
    p1BattleDamageBox.value = benchDamage;
    let buttleColor = document.getElementById("p1_battle_bg").style.backgroundColor;
    let benchColor = document.getElementById("p1_bench8_bg").style.backgroundColor;
    if (document.getElementById("p1_bench8_bg").style.backgroundColor == "pink") {
      benchColor = "transparent"
    }
    document.getElementById("p1_battle_bg").style.backgroundColor = benchColor;
    p1ButtleColor = benchColor;
    document.getElementById("p1_bench8_bg").style.backgroundColor = buttleColor;
    p1BenchColor[8] = buttleColor;
    douki()
  }
  p1B8Trash.onclick = function () {
    let bench = Array.from(document.getElementById("p1_bench8_wrap").children)
    document.getElementById("p1_bench8_wrap").innerHTML = "";
    bench.forEach(_node => p1TrashWrap.appendChild(_node))
    p1Bench8DamageBox.value = "";
    if (document.getElementById("p1_bench8_bg").style.backgroundColor != "pink") {
      document.getElementById("p1_bench8_bg").style.backgroundColor = "transparent";
      p1BenchColor[8] = "transparent"
    }
    obj_window.document.getElementById("p1_bench8_damage_box").value = "";
  }

  p1HandTrash.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1TrashWrap.appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "ハンドをすべてトラッシュ"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }
  p1HandToDeck.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1DeckWrap.appendChild(_node))
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.shuffle()
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "ハンドをすべてデッキに戻してシャッフル"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
    // p1HandHakase.onclick = function () {
    //   let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    //   p1DrawWrap.innerHTML = "";
    //   p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    //   let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    //   document.getElementById("p1_hand_wrap").innerHTML = "";
    //   hand.forEach(_node => p1TrashWrap.appendChild(_node))
    //   for (let i = 0; i < 7; i++) {
    //     document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    //   }
    //   obj_window.document.getElementById('modal').classList.remove('hidden');
    //   obj_window.document.getElementById('mask').classList.remove('hidden');
    //   obj_window.document.getElementById('modal').innerText = "ハンドをすべてデッキに戻してシャッフル"
    //   setTimeout(() => {
    //     obj_window.document.getElementById('modal').classList.add('hidden');
    //     obj_window.document.getElementById('mask').classList.add('hidden');
    //   }, 1000);
    // }
  }
  p1HandHakase.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let hand = Array.from(document.getElementById("p1_hand_wrap").children)
    document.getElementById("p1_hand_wrap").innerHTML = "";
    hand.forEach(_node => p1TrashWrap.appendChild(_node))
    for (let i = 0; i < 7; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "博士の研究を使用"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 1000);
  }
  p1HandMarnie.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < 5; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }
  p1HandMarnie2.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < 4; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }

  p1HandNanjamo.onclick = function () {
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
    for (let i = 0; i < document.getElementById("p1_side_wrap").childElementCount; i++) {
      document.getElementById("p1_hand_wrap").appendChild(document.getElementById("p1_deck_wrap").firstElementChild)
    }
  }

  p1HandToDeckBottom.onclick = function () {
    let p1DrawpaceArea = Array.from(p1DrawWrap.children)
    p1DrawWrap.innerHTML = "";
    p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))
    let p1Hand = Array.from(document.getElementById("p1_hand_wrap").children)
    p1Hand.shuffle()
    document.getElementById("p1_hand_wrap").innerHTML = "";
    p1Hand.forEach(_node => p1DeckWrap.appendChild(_node))
  }

  p1DeckSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_deck_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_deck_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))
  }

  p1TrashSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_trash_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_trash_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_trash_wrap").appendChild(_node))
  }

  p1MugenZone.onclick = function () {
    if (document.getElementById("p1_bench6").style.display == "none") {
      document.getElementById("p1_bench6").style.display = "block";
      document.getElementById("p1_bench7").style.display = "block";
      document.getElementById("p1_bench8").style.display = "block";
      p1MugenZone.innerText = "ベンチ-"
    } else {
      document.getElementById("p1_bench6").style.display = "none";
      document.getElementById("p1_bench7").style.display = "none";
      document.getElementById("p1_bench8").style.display = "none";
      p1MugenZone.innerText = "ベンチ+"
    }
    douki()
  }

  p1LostzoneSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_lostzone_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_lostzone_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_lostzone_wrap").appendChild(_node))
  }

  p1HandSort.onclick = function () {
    console.log("click")
    let temp = Array.from(document.getElementById("p1_hand_wrap").children)
    temp.sort(function (a, b) {
      if (a.id.slice(-2) < b.id.slice(-2)) return -1;
      if (a.id.slice(-2) > b.id.slice(-2)) return 1;
      return 0;
    });
    document.getElementById("p1_hand_wrap").innerHTML = ""
    temp.forEach(_node => document.getElementById("p1_hand_wrap").appendChild(_node))
  }

  p1Reset.onclick = function () {
    p1SideWrap.innerHTML = ""
    p1BattleWrap.innerHTML = ""
    p1Bench1Wrap.innerHTML = ""
    p1Bench2Wrap.innerHTML = ""
    p1Bench3Wrap.innerHTML = ""
    p1Bench4Wrap.innerHTML = ""
    p1Bench5Wrap.innerHTML = ""
    p1Bench6Wrap.innerHTML = ""
    p1Bench7Wrap.innerHTML = ""
    p1Bench8Wrap.innerHTML = ""
    p1HandWrap.innerHTML = ""
    p1DrawWrap.innerHTML = ""
    p1LostzoneWrap.innerHTML = ""
    p1FreeSpaceWrap.innerHTML = ""
    p1TrashWrap.innerHTML = ""
    p1DeckWrap.innerHTML = ""
    stadiumWrap.innerHTML = ""
    p1BattleDamageBox.value = "";
    p1Bench1DamageBox.value = "";
    p1Bench2DamageBox.value = "";
    p1Bench3DamageBox.value = "";
    p1Bench4DamageBox.value = "";
    p1Bench5DamageBox.value = "";
    p1Bench6DamageBox.value = "";
    p1Bench7DamageBox.value = "";
    p1Bench8DamageBox.value = "";

    init("p1")

    obj_window.document.getElementById('modal').classList.remove('hidden');
    obj_window.document.getElementById('mask').classList.remove('hidden');
    obj_window.document.getElementById('modal').innerText = "対戦のセットアップを行いました"
    setTimeout(() => {
      obj_window.document.getElementById('modal').classList.add('hidden');
      obj_window.document.getElementById('mask').classList.add('hidden');
    }, 2000);

  }





  ////デッキ取得
  getDeckButton.onclick = function (event) {
    obj_window = window.open('child.html', 'child', childWindowSize);
    if (leftCode.value == "") {
      alert("デッキコードを入力してください")
      return
    } else if (leftCode.value == "maggyo") {

      p1SideWrap.innerHTML = ""
      p1BattleWrap.innerHTML = ""
      p1Bench1Wrap.innerHTML = ""
      p1Bench2Wrap.innerHTML = ""
      p1Bench3Wrap.innerHTML = ""
      p1Bench4Wrap.innerHTML = ""
      p1Bench5Wrap.innerHTML = ""
      p1Bench6Wrap.innerHTML = ""
      p1Bench7Wrap.innerHTML = ""
      p1Bench8Wrap.innerHTML = ""
      p1HandWrap.innerHTML = ""
      p1DrawWrap.innerHTML = ""
      p1TrashWrap.innerHTML = ""
      p1DeckWrap.innerHTML = ""

      stadiumWrap.innerHTML = ""

      p1BattleDamageBox.value = "";
      p1Bench1DamageBox.value = "";
      p1Bench2DamageBox.value = "";
      p1Bench3DamageBox.value = "";
      p1Bench4DamageBox.value = "";
      p1Bench5DamageBox.value = "";
      p1Bench6DamageBox.value = "";
      p1Bench7DamageBox.value = "";
      p1Bench8DamageBox.value = "";

      p1Deck = [
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "00"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "01"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "02"
        },
        {
          name: 'ガラル マッギョV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S2a/038117_P_GARARUMAGGYOV.jpg',
          id: "03"
        },
        {
          name: 'ルカリオ&amp;メルメタルGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037287_P_RUKARIOMERUMETARUGX.jpg',
          id: "04"
        },
        {
          name: 'ルカリオ&amp;メルメタルGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037287_P_RUKARIOMERUMETARUGX.jpg',
          id: "05"
        },
        {
          name: 'ザシアンV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1W/037656_P_ZASHIANV.jpg',
          id: "06"
        },
        {
          name: 'ザマゼンタV',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037714_P_ZAMAZENTAV.jpg',
          id: "07"
        },
        {
          name: 'デデンネGX',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037252_P_DEDENNEGX.jpg',
          id: "08"
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: "09"
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 10
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 11
        },
        {
          name: 'メタルソーサー',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SP1/037788_T_METARUSOSA.jpg',
          id: 12
        },
        {
          name: 'タッグコール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12/037147_T_TAGGUKORU.jpg',
          id: 13
        },
        {
          name: 'タッグコール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SM12/037147_T_TAGGUKORU.jpg',
          id: 14
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 15
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 16
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 17
        },
        {
          name: 'クイックボール',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/S1H/037722_T_KUIKKUBORU.jpg',
          id: 18
        },
        {
          name: 'ポケモンいれかえ',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SCS/038025_T_POKEMONIREKAE.jpg',
          id: 19
        },
        {
          name: 'ポケモンいれかえ',
          url: 'https://www.pokemon-card.com/assets/images/card_images/large/SCS/038025_T_POKEMONIREKAE.jpg',
          id: 20
        }
      ];

      init("p1")

      return

    } else if (leftCode.value.length < 20) {
      alert("正しい形式のデッキコードを入力してください")
      return
    }
    p1SideWrap.innerHTML = ""
    p1BattleWrap.innerHTML = ""
    p1Bench1Wrap.innerHTML = ""
    p1Bench2Wrap.innerHTML = ""
    p1Bench3Wrap.innerHTML = ""
    p1Bench4Wrap.innerHTML = ""
    p1Bench5Wrap.innerHTML = ""
    p1Bench6Wrap.innerHTML = ""
    p1Bench7Wrap.innerHTML = ""
    p1Bench8Wrap.innerHTML = ""
    p1HandWrap.innerHTML = ""
    p1DrawWrap.innerHTML = ""
    p1TrashWrap.innerHTML = ""
    p1DeckWrap.innerHTML = ""

    stadiumWrap.innerHTML = ""

    p1BattleDamageBox.value = "";
    p1Bench1DamageBox.value = "";
    p1Bench2DamageBox.value = "";
    p1Bench3DamageBox.value = "";
    p1Bench4DamageBox.value = "";
    p1Bench5DamageBox.value = "";
    p1Bench6DamageBox.value = "";
    p1Bench7DamageBox.value = "";
    p1Bench8DamageBox.value = "";


    let $loading = $(".loading");
    jQuery.ajax({
      url: "https://api.funamushi.net/ajax/get3?id=" + leftCode.value,
      dataType: "json",
      beforeSend: function () {
        $loading.removeClass("is-hide");
      }
    }).done((json) => {
      p1Deck = json;
      init("p1")

      //ハンドをデッキに戻す
      let p1DrawpaceArea = Array.from(p1DrawWrap.children)
      p1DrawWrap.innerHTML = "";
      p1DrawpaceArea.forEach(_node => p1HandWrap.appendChild(_node))

      let hand = Array.from(document.getElementById("p1_hand_wrap").children)
      document.getElementById("p1_hand_wrap").innerHTML = "";
      hand.forEach(_node => p1DeckWrap.appendChild(_node))

      let side = Array.from(document.getElementById("p1_side_wrap").children)
      document.getElementById("p1_side_wrap").innerHTML = "";
      side.forEach(_node => p1DeckWrap.appendChild(_node))

      let temp = Array.from(document.getElementById("p1_deck_wrap").children)
      temp.shuffle()
      document.getElementById("p1_deck_wrap").innerHTML = ""
      temp.forEach(_node => document.getElementById("p1_deck_wrap").appendChild(_node))

      $loading.addClass("is-hide");
    })

  }


  ////////////////////////////////


  Sortable.create(p1_side_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    ghostClass: "black-background-class",
    animation: 100
  });

  Sortable.create(p1_battle_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_hand_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    ghostClass: "black-background-class",
    animation: 100
  });

  Sortable.create(p1_draw_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    ghostClass: "black-background-class",
    animation: 100
  });

  Sortable.create(p1_deck_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench1_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench2_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench3_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench4_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench5_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench6_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench7_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_bench8_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_trash_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

  Sortable.create(p1_free_space_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });


  Sortable.create(p1_lostzone_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });


  //////////////////////


  Sortable.create(stadium_wrap, {
    group: {
      name: "p1",
      put: ["p1", "stadium"]
    },
    animation: 100
  });

}

