import { createFileRoute } from "@tanstack/react-router";

import { AchievementsPage } from "../components/AchievementsPage";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
});

