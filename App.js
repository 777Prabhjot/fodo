import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Index from "./app/index";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Index />
      </SafeAreaView>
    </PaperProvider>
  );
}
