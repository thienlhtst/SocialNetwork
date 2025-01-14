namespace NotificationPresentation.Enitites
{
    public class Notification
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public string? SenderId { get; set; } = null;
        public Type Type { get; set; }
        public string? Message { get; set; } = null;
        public DateTime CreatedAt { get; set; }
        public bool IsRead { get; set; }
    }

    public enum Type
    {
        Follow, React, Comment, SuggestPost
    }
}