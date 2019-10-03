//Import scripts
import { setActionNote } from './notifications';


describe("setActionNote script", () => {
  it("Create note", () => {
    const exmapleMess = 'Example notification message';
    
    expect(
      setActionNote("Example notification message")
      .exists(
        <div id="notifications" className="notifications">
          { exmapleMess }
        </div>
      )
    ).toBe(true);
  });
});