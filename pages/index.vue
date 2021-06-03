<template>
  <div class="container">
    <p style="opacity:0">["知性", "未来", "過去", "想像", "多摩キャン", "夢", "ツイッター", "教授", "電車", "バス", "CPlus", "Manaba", "ジンギスカン", "モノレール", "Temico", "多摩", "多摩動物公園", "学費", "基礎マクロ経済学", "テミス", "信用", "知性", "知性", "中央大学", "フォレゲ", "iTL", "Cスクエア", "学生", "インスタ", "Webex", "インターン", "労働", "鉛筆", "バイト", "クラウドキャンパス", "Word", "Excel", "Powerpoint", "性別"],
      verblist: ["死亡", "行動", "絶起", "過労", "忘却", "落下", "喪失", "獲得", "登録", "落単", "会話", "増加", "遊戯", "停止", "変化", "編集", "殺害", "惹起", "克服", "過誤", "錯誤", "盗聴", "見落し", "引受", "掃出", "放送", "祈願", "脱出", "追越", "エンカ", "要求", "咀嚼", "束縛", "鳴動", "夢想", "含有", "所持", "据付", "入手", "性行"]</p>
    <koudousuru :randomize1="randomize1" :randomize2="randomize2" />
  </div>
</template>

<script>
export default {
  data() {
    return{
      nounlist: ["知性", "未来", "過去", "想像", "多摩キャン", "夢", "ツイッター", "教授", "電車", "バス", "CPlus", "Manaba", "ジンギスカン", "モノレール", "Temico", "多摩", "多摩動物公園", "学費", "基礎マクロ経済学", "テミス", "信用", "知性", "知性", "中央大学", "フォレゲ", "iTL", "Cスクエア", "学生", "インスタ", "Webex", "インターン", "労働", "鉛筆", "バイト", "クラウドキャンパス", "Word", "Excel", "Powerpoint", "性別"],
      verblist: ["死亡", "行動", "絶起", "過労", "忘却", "落下", "喪失", "獲得", "登録", "落単", "会話", "増加", "遊戯", "停止", "変化", "編集", "殺害", "惹起", "克服", "過誤", "錯誤", "盗聴", "見落し", "引受", "掃出", "放送", "祈願", "脱出", "追越", "エンカ", "要求", "咀嚼", "束縛", "鳴動", "夢想", "含有", "所持", "据付", "入手", "性行"],
    }
  },
  computed: {
    randomize1() {
      const random = Math.round(Math.random() * 40)
      const verblist = ["Die", "Action", "Oversleep", "Overwork", "Forget", "Drop", "Miss", "Obtain", "Subscribe", "Fail", "Talk", "Increase", "Play", "Stop", "Change", "Edit", "Kill", "Arise", "Overcome", "Mistake", "Misunderstand", "Overhear", "Overlook", "Undergo", "Swipe", "Broadcast", "Pray", "Quit", "Overtake", "Encounter", "Seek", "Bite", "Bind", "Ring", "Dream", "Contain", "Belong", "Put", "Gain", "Sex"];
      return [random, verblist[random]]
    },
    randomize2() {
      const random2 = Math.round(Math.random() * 39)
      const nounlist = ["Knowledge", "Future", "Past", "Imagine", "Tama", "Dream", "Twitter", "Professor", "Train", "Bus", "CPlus", "Manaba", "Genghis Khan", "Monorail", "Temico", "Tama", "Zoo", "Tuition", "Kiso Macro", "Themis", "Credit", "Knowledge", "Dream", "Chuo", "FGW", "iTL", "C Square", "Students", "Instagram", "Webex", "Intern", "Working", "Pencil", "Part Time", "Cloud Campus", "Word", "Excel", "Powerpoint", "SEX"];
      return [random2, nounlist[random2]]
    },
  },
  methods: {
    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 太ゴB101 JIS2004,
    "Futo Go B101 JIS2004",
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2em;
  letter-spacing: 0.3em;
  font-feature-settings: "palt";
}

.subtitle {
  font-weight: 600;
  font-size: 2em;
  word-spacing: 5px;
  padding-bottom: 15px;
  font-family: 'Times New Roman', Times, serif
}
.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
</style>
