import type { FC } from "react";

export type PortfolioHeaderProps = {
  title: string;
  description: string;
};

export const PortfolioHeader: FC<PortfolioHeaderProps> = ({
  title,
  description,
}) => (
  <div className="mb-2 ml-4 flex items-center">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);
