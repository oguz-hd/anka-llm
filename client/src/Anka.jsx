import React, { useState } from 'react';
import axios from 'axios';
import './Anka.css';

export default function Anka() {
    const [prompt, setPrompt] = useState('');
    const [res, setRes] = useState('');
    const [loading, setLoading] = useState(false);

    const send = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        setLoading(true);
        setRes('');

        try {
            const { data } = await axios.post('http://localhost:8020/chat', { prompt });
            setRes(data.reply);
        } catch (err) {
            setRes(err.response?.data?.error || 'Hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <h1 className="chat-title">ANKA - LLM</h1>
            <form onSubmit={send}>
                <textarea
                    className="chat-input"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Bir şeyler sorun..."
                    rows={4}
                />
                <button type="submit" className="send-button" disabled={loading || !prompt.trim()}>
                    {loading ? '...' : 'GÖNDER'}
                </button>
            </form>
            {res && (
                <div className="response-box">
                    {res.split('\n').map((l, i) => l ? <p key={i}>{l}</p> : <br key={i} />)}
                </div>
            )}
        </div>
    );
}
