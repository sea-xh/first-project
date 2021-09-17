import { Modal } from 'antd';
import React, { FC, useCallback } from 'react';
import { useModal, BaseModalProps } from './component/ModalRenderer';

const MyModal: FC<BaseModalProps & { a: number }> = (props) => {
	return (
		<Modal visible={props.visible} onOk={props.onHide} onCancel={props.onHide}>
			{props.a}
		</Modal>
	);
};

const Home: FC<{}> = (props) => {
	const showMyModal = useModal(MyModal);

	const handleShow = useCallback(() => {
		showMyModal({
			a: 123,
		});
	}, []);

	return (
		<div>
			showMyModal: <button onClick={handleShow}>show</button>
		</div>
	);
};

export default Home;
