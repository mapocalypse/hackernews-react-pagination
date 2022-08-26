import { Story } from "./Story";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

    jest.mock("../services/apis", () => {

        return {
            getStory: jest.fn().mockResolvedValue(
                { by: "LinuxBender",
                    descendants: 0,
                    id: 32139382,
                    score: 1,
                    time: 1658157591,
                    title: "CISA Urges Patch of Exploited Windows 11 Bug by Aug. 2",
                    type: "story",
                    url: "https://threatpost.com/cisa-urges-patch-11-bug/180235/" })
        };
    });

describe("<Story/>", () => {
    it("Should render Loading...", () => {
        render(<Story storyId={32139382} />)
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        //expect(screen.getByRole('heading')).toHaveTextContent('Loading...'); 
    });

    it("Should render title...", async () => {
        render(<Story storyId={32139382} />);  
        const storyTitle = await screen.findByText('CISA Urges Patch of Exploited Windows 11 Bug by Aug. 2');
        expect(storyTitle).toBeInTheDocument();
        //await waitFor(() => expect(screen.getByText("CISA Urges Patch of Exploited Windows 11 Bug by Aug. 2")).toBeInTheDocument());    
    });
});
