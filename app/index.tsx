import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href="./about">
        Go to About
      </Link>

      <Link href="./Welcome">
        Go to Welcome
      </Link>
       <Link href="./Userdashboard">
        Go to userdashboard
      </Link>
      <Link href="./JourneyHistory">
        Go to JourneyHistory
      </Link>
       <Link href="./ExpenseForm">
        Go to ExpenseForm
      </Link>
      <Link href="./PendingScreen">
        Go to PendingScreen
      </Link>
      <Link href="./Profile">
        Go to Profile
      </Link>
      <Link href="./Expenses">
        Go to Expenses
      </Link>
      <Link href="./EditProfileUser">
        Go to EditProfileUser
      </Link>
      <Link href="./JourneyDetails">
        Go to JourneyDetails
      </Link>
      <Link href="./JourneyDetails">
        Go to ExpenseDetails
      </Link>
      <Link href="./RegisterFail">
        Go to RegisterFail
      </Link>
      <Link href="./LoginFail">
        Go to LoginFail
      </Link>
      <Link href="./AdminDashboard">
        Go to AdminDashboard
      </Link>
      <Link href="./MemberList">
        Go to MemberList
      </Link>
      <Link href="./AddMemberForm">
        Go to AddMemberForm
      </Link>
     <Link href="./PendingApproval">
        Go to PendingApproval
      </Link>
      <Link href="./MemberProfile">
        Go to MemberProfile
      </Link>
      <Link href="./BulkApproval">
        Go to BulkApproval
      </Link>
      <Link href="./RejectedExpenses">
        Go to RejectedExpenses
      </Link>
      <Link href="./EditProfileAdmin">
        Go to EditProfileAdmin
      </Link>
      <Link href="./NewMemberAdded">
        Go to NewMemberAdded
      </Link>
      <Link href="./ExpenseDetailsAdmin">
        Go to ExpenseDetailsAdmin
      </Link>
      <Link href="./JourneyDetailsAdmin">
        Go to JourneyDetailsAdmin
      </Link>
    </View>
  );
}
