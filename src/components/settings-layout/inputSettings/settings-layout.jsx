import React from 'react';
import { useDispatch, useSelector, } from "react-redux";
import { setLevel } from "../../../features/settings/settingsSlice";

const SettingsLayout = () => {
    const dispatch = useDispatch();
    const level = useSelector(state => state.settings.level);

    const handleChange = (event) => {
        const newLevel = event.target.value;

        dispatch(setLevel(newLevel));
        console.log(level);
    }
    return (
        <section className="settings-layout flex justify-center">
            <select onChange={handleChange}>
                <option value={0}>Level - 1 (4x4)</option>
                <option value={1}>Level - 2 (6x6)</option>
                <option value={2}>Level - 3 (8x8)</option>
            </select>
        </section>
    );
}
export default SettingsLayout;