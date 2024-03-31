import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Meal from '@screens/Meal';
import Home from '@screens/Home';
import EditMeal from '@screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="meal"
                component={Meal}
            />
            <Screen
                name="editMeal"
                component={EditMeal}
            />
        </Navigator>
    )
}