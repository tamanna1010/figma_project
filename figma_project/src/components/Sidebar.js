import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
const sidebarArray = [
  { Icon: HomeIcon, name: "Home" },
  { Icon: PhoneIcon, name: "Calls" },
  { Icon: UserGroupIcon, name: "Agents" },
  { Icon: HeartIcon, name: "Emotions" },
  { Icon: ChatBubbleBottomCenterIcon, name: "AI Chatbot" },
];
const Sidebar = () => {
  return (
    <Card className="h-[100vh] w-full max-w-[250px] p-4  bg-app-layover">
      <div className="mb-2 p-4">
        <div className="flex justify-between items-center">
          <Typography variant="h5" className="text-[#7367F0]">
            Dummy
          </Typography>
          <CogIcon className="h-5 w-5" color="#7367F0" />
        </div>
      </div>
      <List>
        {sidebarArray.map(({ Icon, name }) => {
          return (
            <ListItem key={name}>
              <ListItemPrefix>
                <Icon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              <p className="text-white">{name}</p>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
export default Sidebar;
