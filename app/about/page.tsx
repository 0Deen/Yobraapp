import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col gap-3 items-center">
      <Card className="p-10 flex flex-col gap-3 items-center">
        <Image
          src="/wellbeing.png"
          alt="MoodMap Logo"
          width={100}
          height={100}
        />
        <p className="mt-5">
            In Meru and across Kenya, the shortage of mental health professionals is real – we’ve got only 0.75 psychiatrists per 100,000 people, way below the WHO recommendation of 3. 🧠 This huge gap shows the urgent need for smart, tech-driven ways to support mental health in our communities.
            </p>
            <p>
            YobraApp is a homegrown mental health app straight from Meru, built to bridge this gap by helping users track their depression daily 📊 using the PHQ-9 test. It gives personalised feedback 🤖 through the Gemini model, offering advice and daily support based on your own mood and assessments.
            </p>
            <p>
            The app also makes psychiatric care more affordable 🩺 by allowing one psychiatrist to monitor many patients remotely. Hii inasaidia kupunguza cost ya consultancy na kuongeza efficiency, making sure even watu wa mtaa can access quality mental health care bila stress ya kwenda clinic kila siku.
            </p>
            <p>
            YobraApp is here to make a real impact by sending critical condition alerts 🚨 and giving timely, tailored advice 💬. By using tech to address the mental health crisis, YobraApp wants to build a strong, caring community 🤝. We believe it’s time mental wellness became a priority in Kenya. 🌍
            </p>
      </Card>
    </div>
  )
}
