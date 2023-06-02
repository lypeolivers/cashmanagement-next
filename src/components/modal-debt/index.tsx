import React, { useState } from 'react';
import { Button, Modal, Input, Select, InputNumber } from 'antd';
import type { SelectProps } from 'antd';

import { iDebt } from '@/interfaces/debt';

export default function ModalDebt(props: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState<string>('');
    const [type, setType] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [numberValue, setNumberValue] = useState<number | null>(0);
    const options: SelectProps['options'] = [
        { label: 'Nice', value: 'nice' }
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function add() {
        let object: iDebt = {
            id: "#",
            name: name,
            type: type,
            value: numberValue || 0,
            tags: tags
        }
        props.setDatabase((prev: any) => [...prev, object]);
        console.log('obj: ', object)
        handleCancel()
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add +
            </Button>
            <Modal title="Adicionar novo gasto" open={isModalOpen} onOk={() => add()} onCancel={handleCancel}>
                <Input placeholder="Nome da conta ex: 'Uber' " onChange={(e) => setName(e.target.value)} />
                <Select
                    defaultValue="out"
                    style={{ width: 120 }}
                    onChange={(value) => setType(value)}
                    options={[
                        { value: 'in', label: 'Entrada' },
                        { value: 'out', label: 'Saída' },
                    ]}
                />
                <InputNumber addonAfter="$" value={numberValue} defaultValue={0} onChange={(value) => setNumberValue(value)} />
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Tags"
                    defaultValue={['nice']}
                    onChange={(tag: string[]) => setTags(tag)}
                    options={options}
                />
                {/* <Button type="primary" onClick={() => add()}>
                    Add +
                </Button> */}
            </Modal>
        </>
    );
};
