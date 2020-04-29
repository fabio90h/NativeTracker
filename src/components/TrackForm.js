import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		changeName,
		stopRecording,
	} = useContext(LocationContext);

	return (
		<>
			<Spacer>
				<Input value={name} onChange={changeName} placeholder="Enter Name" />
			</Spacer>
			<Spacer>
				{recording ? (
					<Button onPress={stopRecording} title="Stop" />
				) : (
					<Button onPress={startRecording} title="Start Recording" />
				)}
			</Spacer>
			{!recording && locations.length > 0 ? (
				<Spacer>
					<Button title="Save Track" />
				</Spacer>
			) : null}
		</>
	);
};

export default TrackForm;
