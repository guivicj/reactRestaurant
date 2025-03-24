export default function Spacer({ size = 16, horizontal = false }) {
    return (
        <div style={{
            width: horizontal ? size : 0,
            height: horizontal ? 0 : size,
            flexShrink: 0,
        }} />
    );
}
