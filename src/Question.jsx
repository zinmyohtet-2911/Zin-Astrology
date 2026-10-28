import React, { useState } from "react";
import { calculateAstrology } from "./astrologyCalc";

export default function Question() {
  
  const [userInput, setUserInput] = useState({
    year : "",
    timing: "before",
    day : "monday",
  })

  const [result,setResult] = useState(null);

  function handleSubmit(event){
    event.preventDefault();
    const prediction = calculateAstrology(userInput.year,userInput.timing,userInput.day);
    setResult(prediction);
  }
  return (
    <div className="astrology-form-container">
    <form className="astrology-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label">
                မွေးနှစ်ကို <span className="highlight-text">ခရစ်နှစ်</span> ဖြင့် ရိုက်ထည့်ပါ။
            </label>
            <input type="number" 
            className="form-input" 
            placeholder="ဥပမာ - 2000" 
            value={userInput.year} 
            onChange={(e)=>setUserInput({...userInput, year:e.target.value})}
            />
        </div>

        <div className="form-group">
            <label className="form-label">
                မိမိသည် မိမိမွေးသည့်နှစ်တွင် သင်္ကြန်မတိုင်ခင် မွေးသူလား? သင်္ကြန်ပြီးမှာ မွေးသူလား?
            </label>
            <p className="form-hint">
                Jan, Feb, March, April(သင်္ကြန်မတိုင်ခင်) တို့တွင် မွေးသူနှင့် April(သင်္ကြန်ပြီးမွေးသူ), 
                May, June, July, August, Sept, Oct, Nov, Dec မွေးသူများ ဆိုပြီး ခွဲခြားရန်ဖြစ်သည်။
            </p>
            <select className="form-select" 
            name="thingyanTiming" 
            value={userInput.timing}
            onChange={(e)=>setUserInput({...userInput, timing:e.target.value})}
            >
                <option value="before">သင်္ကြန်မတိုင်ခင် မွေးသူဖြစ်သည်။</option>
                <option value="after">သင်္ကြန်ပြီးမှ မွေးသူဖြစ်သည်။</option>
            </select>
        </div>

        <div className="form-group">
            <label className="form-label">ဘယ်နေ့တွင် ဖွားမြင်သနည်း။</label>
            <select className="form-select" 
            name="birthDay"
            value={userInput.day}
            onChange={(e)=>setUserInput({...userInput, day: e.target.value})}
            >
                <option value="monday">တနင်္လာ</option>
                <option value="tuesday">အင်္ဂါ</option>
                <option value="wednesday">ဗုဒ္ဓဟူး</option>
                <option value="thursday">ကြာသပတေး</option>
                <option value="friday">သောကြာ</option>
                <option value="saturday">စနေ</option>
                <option value="sunday">တနင်္ဂနွေ</option>
            </select>
        </div>

        <button type="submit" className="form-submit-btn">စစ်ဆေးမည်</button>
    </form>

    {result && (
        <div className="result-box">
{result}
<p className="result-disclaimer">
      ⚠️ ဤရလဒ်သည် ခရစ်နှစ်မှ မြန်မာသက္ကရာဇ်သို့ ယေဘုယျ ဖော်မြူလာဖြင့် 
      တွက်ချက်ထားခြင်း ဖြစ်ပါသည်။ အချို့သော နှစ်များတွင် အနည်းငယ် 
      ကွာခြားနိုင်ပါသည်။ တိကျသော ရလဒ်အတွက် ကျွမ်းကျင်သူ ဆရာနှင့် 
      တိုက်ဆိုင်စစ်ဆေးရန် အကြံပြုအပ်ပါသည်။
    </p>
        </div>
    )}
</div>
  );
}