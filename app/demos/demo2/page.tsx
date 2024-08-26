import SpeechToText from './components/SpeechToText';
//import VoiceChatBot from './components/VoiceBot';

export default function Page() {
  return (
    <div>
      <h1>Speech to Text using Web Speech API</h1>
      <SpeechToText />
      {/* <VoiceChatBot /> */}
    </div>
  );
};
